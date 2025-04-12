import { slugify } from '@/lib/utils';

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  tags: string[];
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Kubernetes Secrets Management Best Practices",
    slug: "kubernetes-secrets-management",
    date: "2023-10-15",
    excerpt: "A deep dive into secure handling of secrets in Kubernetes environments, with practical examples.",
    tags: ["Kubernetes", "Security", "Best Practices"],
    content: `
# Kubernetes Secrets Management Best Practices

When deploying applications in Kubernetes, managing secrets securely is critical. This article explores best practices for handling sensitive information in your Kubernetes environments.

## The Problem with Kubernetes Secrets

By default, Kubernetes secrets are:

1. Base64 encoded (not encrypted)
2. Stored in etcd without encryption (unless you enable encryption at rest)
3. Accessible to anyone with API access

This means they're not suitable for storing sensitive information without additional security measures.

## Best Practices for Kubernetes Secrets

### 1. Enable Encryption at Rest

Configure etcd to encrypt secrets:

\`\`\`yaml
apiVersion: apiserver.config.k8s.io/v1
kind: EncryptionConfiguration
resources:
  - resources:
      - secrets
    providers:
      - aescbc:
          keys:
            - name: key1
              secret: <BASE64_ENCODED_KEY>
      - identity: {}
\`\`\`

### 2. Use External Secrets Management

Better alternatives include:

#### HashiCorp Vault

\`\`\`yaml
# Deploy Vault on Kubernetes first

# Then use the Vault Agent Injector
annotations:
  vault.hashicorp.com/agent-inject: 'true'
  vault.hashicorp.com/agent-inject-secret-database-config.txt: 'database/creds/db-app'
  vault.hashicorp.com/role: 'database-app'
\`\`\`

#### AWS Secrets Manager with External Secrets Operator

\`\`\`yaml
apiVersion: external-secrets.io/v1beta1
kind: ExternalSecret
metadata:
  name: example
spec:
  refreshInterval: "15s"
  secretStoreRef:
    name: aws-secretsmanager
    kind: SecretStore
  target:
    name: example-secret
  data:
  - secretKey: username
    remoteRef:
      key: example-secret
      property: username
  - secretKey: password
    remoteRef:
      key: example-secret
      property: password
\`\`\`

### 3. Implement RBAC Controls

Restrict access to secrets with proper Role-Based Access Control:

\`\`\`yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: default
  name: secret-reader
rules:
- apiGroups: [""]
  resources: ["secrets"]
  resourceNames: ["app-secret"]
  verbs: ["get", "watch", "list"]
\`\`\`

### 4. Scan for Secrets in Code and Images

Use tools to detect accidentally committed secrets:

- git-secrets
- Trufflehog
- Trivy for container image scanning

### 5. Regularly Rotate Secrets

Implement policies to rotate secrets regularly:

- Use short-lived credentials when possible
- Implement automation for rotation
- Consider solutions like Vault's dynamic secrets

### 6. Monitor Secret Access

Audit and monitor access to your secrets:

\`\`\`yaml
apiVersion: audit.k8s.io/v1
kind: Policy
rules:
- level: RequestResponse
  resources:
  - group: ""
    resources: ["secrets"]
\`\`\`

## Conclusion

Kubernetes secrets should never be used in their default state for sensitive information. By implementing the practices above, you can significantly improve the security of your Kubernetes secrets management.

Remember that a layered approach provides the best security. Combine multiple methods for the most robust solution.
`
  },
  {
    title: "Building Reusable Terraform Modules",
    slug: "reusable-terraform-modules",
    date: "2023-08-15",
    excerpt: "Best practices for creating modular, maintainable infrastructure as code with Terraform.",
    tags: ["Terraform", "IaC", "DevOps"],
    content: `
# Building Reusable Terraform Modules

Terraform modules help you organize and reuse infrastructure code, improving maintainability and consistency across your organization. This article covers best practices for creating effective, reusable Terraform modules.

## Why Use Terraform Modules?

Modules provide several benefits:

- **Reusability**: Define infrastructure patterns once, use them many times
- **Abstraction**: Hide complex implementation details behind a simple interface
- **Consistency**: Enforce standards across infrastructure deployments
- **Testing**: Validate modules independently before use
- **Versioning**: Control changes and updates to infrastructure patterns

## Module Structure Best Practices

### 1. Keep Modules Focused

Each module should do one thing well:

- A VPC module should create network resources
- An EC2 module should handle compute resources
- An RDS module should manage database resources

### 2. Provide Sensible Defaults

Make modules easy to use with good defaults:

\`\`\`hcl
variable "instance_type" {
  description = "The EC2 instance type"
  type        = string
  default     = "t3.micro"
}

variable "tags" {
  description = "Tags to apply to all resources"
  type        = map(string)
  default     = {}
}
\`\`\`

### 3. Use Local Variables for Clarity

Local variables improve readability and reduce repetition:

\`\`\`hcl
locals {
  name_prefix = var.environment != "" ? "[PROJECT_NAME]-[ENVIRONMENT]" : var.project_name
  common_tags = merge(
    var.tags,
    {
      Project     = var.project_name
      Environment = var.environment
      ManagedBy   = "Terraform"
    }
  )
}
\`\`\`

### 4. Validate Input Variables

Add validation rules to prevent errors:

\`\`\`hcl
variable "environment" {
  description = "Environment name (prod, staging, dev)"
  type        = string
  
  validation {
    condition     = contains(["prod", "staging", "dev", ""], var.environment)
    error_message = "Environment must be prod, staging, dev, or empty string."
  }
}

variable "name_prefix" {
  description = "Prefix for resource names"
  type        = string
  
  validation {
    condition     = length(var.name_prefix) <= 10
    error_message = "Name prefix cannot be longer than 10 characters."
  }
}
\`\`\`

### 5. Use Output Values Effectively

Output the essential information consumers need:

\`\`\`hcl
output "vpc_id" {
  description = "The ID of the VPC"
  value       = aws_vpc.this.id
}

output "public_subnet_ids" {
  description = "List of public subnet IDs"
  value       = aws_subnet.public[*].id
}

output "private_subnet_ids" {
  description = "List of private subnet IDs"
  value       = aws_subnet.private[*].id
}
\`\`\`

### 6. Document Your Modules

Create a comprehensive README.md with:

- Module purpose and description
- Example usage
- Input variables and their descriptions
- Output values and their descriptions
- Requirements (Terraform version, provider versions)
- Limitations and known issues

## Example Module Structure

Here's a simple example of an EC2 instance module:

\`\`\`hcl
# main.tf
resource "aws_instance" "this" {
  count = var.instance_count
  
  ami           = var.ami_id
  instance_type = var.instance_type
  
  tags = merge(
    local.all_tags,
    { "Name": "instance-prefix-[COUNT_INDEX]" }
  )
}
\`\`\`

## Example: VPC Module

\`\`\`hcl
# main.tf
resource "aws_vpc" "this" {
  cidr_block           = var.vpc_cidr
  enable_dns_support   = var.enable_dns_support
  enable_dns_hostnames = var.enable_dns_hostnames
  
  tags = merge(
    var.tags,
    { "Name": "vpc-prefix" }
  )
}

resource "aws_subnet" "public" {
  count = length(var.public_subnet_cidrs)
  
  vpc_id                  = aws_vpc.this.id
  cidr_block              = var.public_subnet_cidrs[count.index]
  availability_zone       = element(var.availability_zones, count.index)
  map_public_ip_on_launch = true
  
  tags = merge(
    var.tags,
    { "Name": "public-subnet-prefix-[COUNT_INDEX_PLUS_ONE]" }
  )
}

# More resources for private subnets, NAT gateways, routes, etc.
\`\`\`

## Module Registry Organization

Organize your modules in a central repository:

\`\`\`
terraform-modules/
├── networking/
│   ├── vpc/
│   ├── security-groups/
│   └── load-balancers/
├── compute/
│   ├── ec2-instance/
│   └── autoscaling-group/
└── storage/
    ├── s3/
    └── rds/
\`\`\`

## Versioning Your Modules

Use Git tags for versioning:

\`\`\`bash
git tag -a "v1.0.0" -m "Initial stable release"
git push origin v1.0.0
\`\`\`

Then in your Terraform code:

\`\`\`hcl
module "vpc" {
  source = "git::https://github.com/your-org/terraform-modules.git//networking/vpc?ref=v1.0.0"
  
  # module inputs...
}
\`\`\`

## Conclusion

Building reusable Terraform modules requires careful planning and design. By following these best practices, you can create a library of modules that provides consistency, improves productivity, and reduces errors across your organization.

Start small with a few core modules, gather feedback, and iterate. Over time, you'll build a comprehensive module library tailored to your organization's needs.
`
  },
  {
    title: "Optimizing CI/CD Pipelines for Speed and Reliability",
    slug: "optimizing-cicd-pipelines",
    date: "2023-07-10",
    excerpt: "Techniques to make your continuous integration and deployment processes faster and more dependable.",
    tags: ["CI/CD", "Performance", "DevOps"],
    content: `
# Optimizing CI/CD Pipelines for Speed and Reliability

Continuous Integration and Continuous Deployment (CI/CD) pipelines are the backbone of modern software delivery. However, as projects grow in complexity, these pipelines can become slow and unreliable, creating bottlenecks in your development workflow. This article explores practical techniques to optimize your CI/CD pipelines for both speed and reliability.

## Why Pipeline Performance Matters

Slow pipelines directly impact developer productivity and happiness:

- **Feedback delay**: Developers wait longer to know if their changes work
- **Reduced iteration speed**: Fewer deployments per day
- **Resource costs**: Longer builds consume more compute resources
- **Deployment bottlenecks**: Slow pipelines limit how quickly you can respond to issues

## Optimization Techniques

### 1. Implement Caching Strategies

Caching dependencies and build artifacts between runs can dramatically reduce build times.

**Example in GitHub Actions**:

\`\`\`yaml
- name: Cache node modules
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: "[RUNNER_OS]-node-[HASH_FILES]"
    restore-keys: |
      [RUNNER_OS]-node-

- name: Install Dependencies
  run: npm ci
\`\`\`

**Example in GitLab CI**:

\`\`\`yaml
build:
  script:
    - npm ci
    - npm run build
  cache:
    key: 
      files:
        - package-lock.json
    paths:
      - node_modules/
\`\`\`

### 2. Parallelize Your Workflow

Run independent tasks in parallel to reduce overall pipeline time.

**Example in GitHub Actions**:

\`\`\`yaml
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run lint

  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm test

  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run build
\`\`\`

### 3. Use Docker Layer Caching

Optimize Docker builds for faster image creation:

\`\`\`dockerfile
# Order dependencies by change frequency (least to most frequent)
FROM node:16-alpine

# Copy dependency files first
COPY package.json package-lock.json ./

# Install dependencies in a separate layer
RUN npm ci

# Then copy application code
COPY . .

# Build the application
RUN npm run build
\`\`\`

Enable BuildKit for Docker builds:

\`\`\`bash
DOCKER_BUILDKIT=1 docker build -t myapp .
\`\`\`

### 4. Implement Test Splitting and Optimization

Split test suites for parallel execution:

\`\`\`yaml
test_split:
  runs-on: ubuntu-latest
  strategy:
    matrix:
      shard: [1, 2, 3, 4]
  steps:
    - uses: actions/checkout@v3
    - name: Setup Node
      uses: actions/setup-node@v3
    - name: Install dependencies
      run: npm ci
    - name: Run tests
      run: npm test -- --shard=[MATRIX_SHARD]/4
\`\`\`

Implement test selection to run only relevant tests:

\`\`\`bash
git diff --name-only origin/main... | \
  grep -E '\.js$|\.ts$' | \
  xargs npx jest-select-affected
\`\`\`

### 5. Optimize Dependencies

Audit and reduce dependencies:

\`\`\`bash
# For Node.js projects
npm prune --production

# For Python projects
pip install --no-deps -r requirements.txt
\`\`\`

Use dependency analysis tools:

\`\`\`bash
# For Node.js
npx depcheck

# For Java
mvn dependency:analyze
\`\`\`

### 6. Incremental Builds

Configure your build system to support incremental builds:

**For webpack**:
\`\`\`js
// webpack.config.js
module.exports = {
  // ...
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  }
};
\`\`\`

**For Gradle**:
\`\`\`gradle
org.gradle.caching=true
org.gradle.parallel=true
\`\`\`

### 7. Pipeline-as-Code Best Practices

Structure your pipelines for maintainability:

\`\`\`yaml
# .github/workflows/reusable-workflows/test.yml
name: Run Tests
on:
  workflow_call:
    inputs:
      node-version:
        required: false
        default: '16'
        type: string

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "[INPUTS_NODE_VERSION]"
      - run: npm ci
      - run: npm test
\`\`\`

Then reuse this workflow:

\`\`\`yaml
# .github/workflows/main.yml
name: Main
on: [push]
jobs:
  call-test-workflow:
    uses: ./.github/workflows/reusable-workflows/test.yml
    with:
      node-version: '16'
\`\`\`

## Monitoring and Continuous Improvement

Set up metrics collection to track pipeline performance:

- **Build duration**: Track total time and per-stage time
- **Success rate**: Monitor reliability with pass/fail metrics
- **Queue time**: Time spent waiting to be executed
- **Resource usage**: CPU, memory, and network consumption

Visualize this data with tools like:
- Datadog
- Grafana
- Built-in CI platform metrics

## Conclusion

Optimizing CI/CD pipelines is an ongoing effort, not a one-time task. By implementing the techniques outlined in this article, you can significantly improve both the speed and reliability of your delivery pipelines.

Remember that the best optimizations will depend on your specific workload and toolchain. Start by identifying your biggest bottlenecks, apply targeted improvements, and measure the results to ensure you're making real progress.
`
  },
  {
    title: "Securing Your Kubernetes Cluster: A Defense-in-Depth Approach",
    slug: "securing-kubernetes-cluster",
    date: "2023-05-18",
    excerpt: "Implementing multiple layers of security controls to protect your Kubernetes environment from various threats.",
    tags: ["Kubernetes", "Security", "DevSecOps"]
  },
  {
    title: "GitOps: Managing Infrastructure with Git",
    slug: "gitops-infrastructure-git",
    date: "2023-04-03",
    excerpt: "How to implement GitOps principles for declarative infrastructure and application deployments.",
    tags: ["GitOps", "DevOps", "Kubernetes", "CI/CD"]
  },
  {
    title: "Multi-Cloud Infrastructure with Terraform",
    slug: "multi-cloud-terraform",
    date: "2023-02-15",
    excerpt: "Strategies for managing infrastructure across multiple cloud providers using Terraform.",
    tags: ["Terraform", "Multi-Cloud", "IaC", "AWS", "Azure", "GCP"]
  }
];

export const featuredPosts = blogPosts.slice(0, 3);
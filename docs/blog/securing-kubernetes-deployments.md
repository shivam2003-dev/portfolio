---
title: "Securing Kubernetes Deployments with Pod Security Policies"
date: "2023-05-15"
slug: "securing-kubernetes-deployments"
tags: ["Kubernetes", "Security", "DevSecOps"]
excerpt: "Learn how to implement Pod Security Policies to harden your Kubernetes cluster against security threats and ensure compliance with security standards."
---

# Securing Kubernetes Deployments with Pod Security Policies

Kubernetes has become the de facto standard for container orchestration, but its default configurations often prioritize convenience over security. In this article, I'll show you how to implement Pod Security Policies (PSPs) to enforce security best practices in your Kubernetes deployments.

## Why Pod Security Policies Matter

Pod Security Policies provide a cluster-level mechanism to enforce security settings for all pods in your cluster. They can help prevent:

- Running containers with escalated privileges
- Using the host network or IPC namespaces
- Mounting sensitive host paths

Without these controls, a compromised container could potentially escape its isolation and gain access to the host system.

## Implementing PSPs in Your Cluster

First, ensure that the PodSecurityPolicy admission controller is enabled in your Kubernetes API server configuration. Here's a snippet from a secure kube-apiserver configuration:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: kube-apiserver
spec:
  containers:
  - command:
    - kube-apiserver
    - --enable-admission-plugins=NodeRestriction,PodSecurityPolicy
    # other flags...
```

Next, create a restrictive PSP:

```yaml
apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: restricted
spec:
  privileged: false
  allowPrivilegeEscalation: false
  requiredDropCapabilities:
    - ALL
  volumes:
    - 'configMap'
    - 'emptyDir'
    - 'projected'
    - 'secret'
    - 'downwardAPI'
    - 'persistentVolumeClaim'
  hostNetwork: false
  hostIPC: false
  hostPID: false
  runAsUser:
    rule: 'MustRunAsNonRoot'
  seLinux:
    rule: 'RunAsAny'
  supplementalGroups:
    rule: 'MustRunAs'
    ranges:
      - min: 1
        max: 65535
  fsGroup:
    rule: 'MustRunAs'
    ranges:
      - min: 1
        max: 65535
  readOnlyRootFilesystem: true
```

Don't forget to create the necessary RBAC rules to allow your service accounts to use this PSP:

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: psp:restricted
rules:
- apiGroups: ['policy']
  resources: ['podsecuritypolicies']
  verbs: ['use']
  resourceNames:
  - restricted
```

## Enforcing Non-Root Containers

One of the most critical security measures is to ensure containers run as non-root users. This prevents privilege escalation attacks within the container. Add these settings to your Deployment manifests:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: secure-app
spec:
  template:
    spec:
      securityContext:
        runAsNonRoot: true
        runAsUser: 10001
        runAsGroup: 10001
      containers:
      - name: app
        image: myapp:1.0.0
        securityContext:
          allowPrivilegeEscalation: false
          readOnlyRootFilesystem: true
          capabilities:
            drop:
            - ALL
```

## Moving to Pod Security Standards (PSS)

Since Kubernetes 1.22, Pod Security Policies are being replaced by Pod Security Standards. These provide three levels of security enforcement:

1. **Privileged**: Unrestricted policy, providing the widest possible level of permissions
2. **Baseline**: Minimally restrictive policy that prevents known privilege escalations
3. **Restricted**: Heavily restricted policy following security best practices

To implement PSS, use the built-in admission controller:

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: secure-ns
  labels:
    pod-security.kubernetes.io/enforce: restricted
    pod-security.kubernetes.io/audit: restricted
    pod-security.kubernetes.io/warn: restricted
```

## Conclusion

Implementing Pod Security Policies is an essential step in securing your Kubernetes deployments. By restricting what containers can do within your cluster, you can prevent many common attack vectors and ensure your applications follow security best practices.

For even more security, consider implementing additional controls like:

- Network policies to restrict pod-to-pod communication
- OPA Gatekeeper for custom policy enforcement
- Image scanning in your CI/CD pipeline

Remember, security is a continuous process, not a one-time configuration.
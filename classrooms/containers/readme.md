# K8S

## HPA

### Stress Test with Fortio

```shell
kubectl run -it fortio --rm --image=fortio/fortio -- load -qps 800 -t 120s -c 70 "http://goserver-svc/healthz"
```
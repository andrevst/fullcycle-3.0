package main

import (
	"log"
	"math/rand"
	"net/http"
	"time"

	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

var onlineUsers = prometheus.NewGauge(prometheus.GaugeOpts{
	Name: "goapp_online_users",
	Help: "Number of online users",
	ConstLabels: map[string]string{
		"app":    "goapp",
		"course": "observability",
	},
})

var httpRequestsTotal = prometheus.NewCounterVec(prometheus.CounterOpts{
	Name: "goapp_http_requests_total",
	Help: "Total number of HTTP requests",
	ConstLabels: map[string]string{
		"app":    "goapp",
		"course": "observability",
	},
}, []string{})

func main() {
	r := prometheus.NewRegistry()
	r.MustRegister(onlineUsers)
	r.MustRegister(httpRequestsTotal)

	go func() {
		for {
			onlineUsers.Set(float64(rand.Intn(2000)))
			time.Sleep(5 * time.Second)
		}
	}()

	home := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		time.Sleep(time.Duration(rand.Intn(8)) * time.Second)
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("Hello Full Cycle"))
	})

	http.Handle("/", promhttp.InstrumentHandlerCounter(httpRequestsTotal, home))
	http.Handle("/metrics", promhttp.HandlerFor(r, promhttp.HandlerOpts{}))
	log.Fatal(http.ListenAndServe(":8181", nil))
}

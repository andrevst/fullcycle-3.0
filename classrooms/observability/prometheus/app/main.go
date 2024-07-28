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

func main() {
	r := prometheus.NewRegistry()
	r.MustRegister(onlineUsers)

	go func() {
		for {
			onlineUsers.Set(float64(rand.Intn(2000)))
			time.Sleep(5 * time.Second)
		}
	}()

	http.Handle("/metrics", promhttp.HandlerFor(r, promhttp.HandlerOpts{}))
	log.Fatal(http.ListenAndServe(":8181", nil))
}

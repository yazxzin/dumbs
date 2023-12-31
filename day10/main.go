package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello World")
	})

	e.GET("/json", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]string{
			"name":    "Haqi",
			"address": "Depok",
		})
	})

	e.Logger.Fatal(e.Start("localhost:5000"))

}

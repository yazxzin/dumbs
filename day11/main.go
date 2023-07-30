package main

import (
	"fmt"
	"net/http"
	"text/template"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	e.Static("/assets", "assets")

	e.GET("/", home)
	e.GET("/home", home)
	e.GET("/contact", contact)
	e.GET("/testimonial", testimonial)
	e.GET("/blog", blog)
	e.POST("/add-project", addProject)

	e.Logger.Fatal(e.Start("localhost:1000"))
}

func home(c echo.Context) error {
	tmpl, err := template.ParseFiles("views/index.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	return tmpl.Execute(c.Response(), nil)
}

func contact(c echo.Context) error {
	tmpl, err := template.ParseFiles("views/contact.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	return tmpl.Execute(c.Response(), nil)
}

func testimonial(c echo.Context) error {
	tmpl, err := template.ParseFiles("views/testimonial.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	return tmpl.Execute(c.Response(), nil)
}

func blog(c echo.Context) error {
	tmpl, err := template.ParseFiles("views/blog.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	return tmpl.Execute(c.Response(), nil)
}

func addProject(c echo.Context) error {
	ProjectName := c.FormValue("project-name")
	StartDate := c.FormValue("start-date")
	EndDate := c.FormValue("end-date")
	Description := c.FormValue("description")

	fmt.Println("Project Name :", ProjectName)
	fmt.Println("Start Date :", StartDate)
	fmt.Println("End Date :", EndDate)
	fmt.Println("Description :", Description)

	return c.Redirect(http.StatusMovedPermanently, "/blog")

}

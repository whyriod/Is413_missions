using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using System.Threading.Tasks;

namespace missions.Controllers
{
    public class HomeController : Controller
    {
        //Main Page
        public IActionResult Index()
        {
            return View();
        }

        //Calculator View
        [HttpGet]
        public IActionResult Calc()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Calc(Models.Grades data)
        {
            return View();
        }

        //My Custom Json response
        public class CustomResponse
        {
            public string letter_grade { get; set; }
            public double total_grade { get; set; }
        }

        [HttpPost]
        public ActionResult GradeForm(Models.Grades data)
        {
            //Add them together
            double a = data.Assignment * 0.55;
            double g = data.Group_project * 0.05;
            double q = data.Quiz * 0.10;
            double e = data.Exam * 0.20;
            double i = data.Intex * 0.10;

            double total_grade = a + g + q + e + i;

            string letter_grade;

            //Determine letter grade
            if (total_grade >= 94)
            {
                letter_grade = "A";
            }
            else if (total_grade >= 90)
            {
                letter_grade = "A-";
            }
            else if (total_grade >= 87)
            {
                letter_grade = "B+";
            }
            else if (total_grade >= 84)
            {
                letter_grade = "B";
            }
            else if (total_grade >= 80)
            {
                letter_grade = "B-";
            }
            else if (total_grade >= 77)
            {
                letter_grade = "C+";
            }
            else if (total_grade >= 74)
            {
                letter_grade = "C";
            }
            else if (total_grade >= 70)
            {
                letter_grade = "C-";
            }
            else if (total_grade >= 67)
            {
                letter_grade = "D+";
            }
            else if (total_grade >= 64)
            {
                letter_grade = "D";
            }
            else if (total_grade >= 60)
            {
                letter_grade = "D-";
            }
            else
            {
                letter_grade = "E";
            }

            //Custom Response object
            CustomResponse response = new CustomResponse()
            {
                letter_grade = letter_grade,
                total_grade = total_grade,
            };

            //Change to json
            return Json(response);
            //Display Grade to p tag.
            //return Content("Hello World");
        }
    }
}

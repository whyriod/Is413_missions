using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
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
        public IActionResult Calc()
        {
            return View();
        }
    }
}

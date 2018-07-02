using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angular.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Aula06()
        {
            return View();
        }

        public ActionResult Aula07()
        {
            return View();
        }

        public ActionResult Aula08()
        {
            return View();
        }
        public ActionResult Aula09()
        {
            return View();
        }
        public ActionResult Aula10()
        {
            return View();
        }
        public ActionResult Aula11()
        {
            return View();
        }
    }
}
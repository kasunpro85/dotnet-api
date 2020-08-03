using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class PollingController : Controller
    {
        // GET: Polling
        //public ActionResult Index()
        //{
        //    return View();
        //}

        [HttpPost]
        public ActionResult Index()
        {
           
            return Json(new
            {
                reqId = 1001, // request id
                timestamp = 12312312321 ,//timestamp
                isActive = true,
            });
        }
    }
}
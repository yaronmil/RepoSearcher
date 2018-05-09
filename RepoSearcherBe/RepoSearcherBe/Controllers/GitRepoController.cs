using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.ModelBinding;
using RepoSearcherBe.Models;


namespace RepoSearcherBe.Controllers
{
    [RoutePrefix("api/GitRepo")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class GitRepoController : ApiController
    {
        private List<GitRepo> _db;

        public IHttpActionResult BookMark([FromBody] GitRepo repo)
        {
            _db = HttpContext.Current.Session["db"] as List<GitRepo> ?? new List<GitRepo>();
            _db.Add(repo);
            HttpContext.Current.Session["db"] = _db;
            return Ok();
        }
        [System.Web.Http.HttpGet]
        public IHttpActionResult BookMark()
        {
            _db = HttpContext.Current.Session["db"] as List<GitRepo> ?? new List<GitRepo>();
            return Ok(_db);
        }
    }
}
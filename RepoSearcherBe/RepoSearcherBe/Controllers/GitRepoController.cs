using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.ModelBinding;
 

namespace RepoSearcherBe.Controllers
{
    [System.Web.Mvc.RoutePrefix("api/gitRepo")]
    public class GitRepoController : ApiController
    {
        [Route("BookMark")]
        public IHttpActionResult BookMark()
        {
           
            return Ok();
        }
    }
}
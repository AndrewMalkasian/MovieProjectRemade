using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MovieProjectRemade.Controllers
{
    public class MoviesController : ApiController
    {
        // GET: api/Movies
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Movies/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Movies
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Movies/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Movies/5
        public void Delete(int id)
        {
        }
    }
}

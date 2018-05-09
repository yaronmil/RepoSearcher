﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RepoSearcherBe.Models
{
    public class GitRepo
    {
        public int id { get; set; }
        public string name { get; set; }
        public string avatar_url { get; set; }
        public bool isBookMarked { get; set; }

    }
}
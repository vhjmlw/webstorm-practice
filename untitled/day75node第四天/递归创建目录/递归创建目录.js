/**
 * Created by zhangjianlei on 2016/12/14.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const mkdirs = require("../module/mkdir.js");
mkdirs("./demo/demo/demo");
mkdirs(path.join(__dirname,"./demo1/demo2/demo3"),(error)=>{
    throw error;
});
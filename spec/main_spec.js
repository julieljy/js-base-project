"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main=require("../lib/main.js");

describe('add(a,b)',function(){

    var a=1;
    var b=2;

    it('a与b相加',function(){

        var result=main(a,b);

        expect(result).to.equal(3);

    });
});
/*
"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");

describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("测试用例1", function(){

        var result = main();
        var expect_string = '';
        
        expect(expect_string).to.equal(result);
    });

    it("测试用例2", function(){

        main();
        var result = _.flatten(console.log.args).join("\n");
        var expect_string = '';

        expect(expect_string).to.equal(result);
    });
});
*/

import { assert } from "chai";
import { spongeMeme } from "./spongeMeme.js";

describe("Spongebob meme tester", function(){
    it("should work with some upper case and lower case letters", function(){
        assert.equal(spongeMeme("stop Making spongebob Memes!"), "StOp mAkInG SpOnGeBoB MeMeS!");
    });
    
    it("should work when all letters are in upper case", function(){
        assert.equal(spongeMeme("HELLO WORLD"), "HeLlO WoRlD");
    });

    it("should work when all letters are in lower case", function(){
        assert.equal(spongeMeme("hey patrick"), "HeY PaTrIcK");
    });

    it("should work even if there are multiple spaces", function(){
        assert.equal(spongeMeme("So  many   spaces"), "So  MaNy   sPaCeS");
    })
});
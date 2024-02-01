import { describe, it } from "mocha";
import { helpLeo } from "./index.js";
import { expect } from "chai";

describe("Help Leo", function(){
    it("should return the number of gifts when Leo can buy them all", function(){
        expect(helpLeo(10, [1, 4, 2, 1])).to.equal(4);
    });

    it("should return 0 when Leo does not have any money, and there is no free gift", function(){
        expect(helpLeo(0, [1, 2, 8]));
    });

    it("should return 0 when Leo does not have enough money to buy any gift", function(){
        expect(helpLeo(2, [5, 3, 8, 10, 1000]));
    });

    it("should return 1 if Leo's budget is equal to the cheapest gift", function(){
        expect(helpLeo(10, [10, 20, 25]));
    });

    it("should return the correct amount of gifts when Leo can buy only a few of them", function(){
        expect(helpLeo(10, [2, 3, 1, 8, 1]));
        expect(helpLeo(20, [25, 20, 1, 3, 2]));
    });

    it("should return the number of free gifts when Leo has no money and there are free gifts", function(){
        expect(helpLeo(0, [1, 2, 3, 4, 0, 0])).to.equal(2);
    });
})
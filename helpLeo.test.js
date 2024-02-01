import { describe, it } from "mocha";
import { helpLeo } from "./helpLeo.js";
import { assert, expect } from "chai";

describe("Help Leo", function(){
    describe("Most recent tests which have better it-descriptions.", function(){
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
    });

    describe("The tests from the orignal battle dev, which uses assert instead, but has insufficient descriptions", function(){
        it("should return 4", function(){
            assert.equal(helpLeo(20, [13, 2, 4, 6, 1]), 4);
        });
    
        it("should return 8", function(){
            assert.equal(helpLeo(90, [87, 3, 5, 25, 1, 3, 4, 6, 20]), 8);
        });
    
        it("should return 9", function(){
            assert.equal(helpLeo(100, [6, 94, 10, 45, 2, 4, 5, 6, 8, 1]), 9);
        });
    
        it("should return 0", function(){
            assert.equal(helpLeo(0, [1]), 0);
        });
    
        it("should return 7", function(){
            assert.equal(helpLeo(910238, [1231, 42340232403, 9324810, 23948, 19823, 1, 3209, 23894, 1093]), 7);
        });
    
        it("should return 217", function(){
            assert.equal(helpLeo(918, [1,1,1,900,1,56,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,1,1,1,1,1,1,1,1,0,0,0,0]), 217);
        });
    
        it("should return 110", function(){
            assert.equal(helpLeo(10000000, [4, 4, 4, 189189956, 489498, 489489, 6456321, 564156, 231231, 123, 4674, 74987, 45646, 1411, 5496, 9474, 42, 1111, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 478789, 454, 31321, 2222, 33334, 45465, 489479, 989, 4546, 123, 321, 456, 987, 453, 741, 1231, 45468, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 123, 1, 1, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 1, 646, 798798, 22, 45, 7897, 45132, 666, 1132, 12, 5478, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42]), 110);
        });
    
        it("should return all gifts (12)", function(){
            assert.equal(helpLeo(90, [10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5]), 12);
        });
    
        it("should return all gifts (4)", function(){
            assert.equal(helpLeo(4, [1, 1, 1, 1]), 4);
        });
    
        it("should return all gifts (56)", function(){
            assert.equal(helpLeo(1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 56);
        });
    })
})
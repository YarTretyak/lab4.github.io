(function () {
    'use strict';

    angular.module('ProductApp', [])
        .controller('Controller1', Controller1)
        .controller('Controller2', Controller2)
        .service('Serv', Serv);

    Controller1.$inject = ['Serv'];

    function Controller1(Serv) {
        const list = this;
        list.BuyList = Serv.getBuyList();

        list.addToBoughtList = function (index) {
            Serv.addToBoughtList(index);
        }
    }

    Controller2.$inject = ['Serv'];

    function Controller2(Serv) {
        const list2 = this;

        list2.boughtList = Serv.getBoughtList();

    }

    function Serv() {
        const service = this;

        let BuyList = [
            {
                name: "банани",
                quantity: "5"
            },
            {
                name: "яблука",
                quantity: "5"
            },
            {
                name: "хліб",
                quantity: "5"
            },
            {
                name: "помідори",
                quantity: "5"
            },
            {
                name: "клубніка",
                quantity: "5"
            }
        ];

        let boughtList = [];

        service.addToBoughtList = function (BuyListIndex) {
            boughtList.push(BuyList[BuyListIndex]);
            BuyList.splice(BuyListIndex, 1);
        };
        service.getBuyList = function () {
            return BuyList;
        };
        service.getBoughtList = function () {
            return boughtList;
        };
    }
})();

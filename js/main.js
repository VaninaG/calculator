$(document).on("ready", function() {
    var calculator = {
        "display": {
            "input": $("#operation"),
            "result": $("#result")
        },
        "ecuation": [],
        "resolve": function() {
            throw new Error("Not implemented yet");
        },
        "insertValue": function(value) {

            this.ecuation.push(value);

            this.display.input.html(this.ecuation.join(""));

        },
        "removeLastValue": function() {
            throw new Error("Not implemented yet");
        }
    };

    $("[data-action=insert-value]").on("click", function(event) {
        calculator.insertValue($(event.currentTarget).attr("data-value"));
    });

});

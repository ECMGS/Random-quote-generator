var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuoteBox = function (_React$Component) {
    _inherits(QuoteBox, _React$Component);

    function QuoteBox(props) {
        _classCallCheck(this, QuoteBox);

        var _this = _possibleConstructorReturn(this, (QuoteBox.__proto__ || Object.getPrototypeOf(QuoteBox)).call(this, props));

        _this.state = {
            frsel: 0
        };

        _this.numAleatorio = _this.numAleatorio.bind(_this);
        return _this;
    }

    _createClass(QuoteBox, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.numAleatorio();
        }
    }, {
        key: "numAleatorio",
        value: function numAleatorio() {

            var nAl = Math.round(Math.random() * 35);

            this.setState({
                frsel: nAl
            });
        }
    }, {
        key: "render",
        value: function render() {

            var frase = frases[this.state.Wfrsel];

            return React.createElement(
                "div",
                { id: "quote-box" },
                React.createElement(
                    "div",
                    { id: "center-card" },
                    React.createElement(
                        "div",
                        { id: "tweet-box" },
                        React.createElement(
                            "a",
                            { id: "tweet-quote", href: "https://twitter.com/intent/tweet?text=" + frase[0] },
                            "Comparte la frase"
                        )
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "h2",
                            { id: "text" },
                            React.createElement(
                                "i",
                                null,
                                "\"",
                                frase[0],
                                "\""
                            )
                        ),
                        React.createElement(
                            "h3",
                            { id: "author" },
                            "- ",
                            frase[1]
                        )
                    ),
                    React.createElement(
                        "button",
                        { id: "new-quote", onClick: this.numAleatorio },
                        "Sigue inspirandome..."
                    )
                )
            );
        }
    }]);

    return QuoteBox;
}(React.Component);

function pCargada() {
    ReactDOM.render(React.createElement(QuoteBox, null), document.getElementById("quote-app"));
}
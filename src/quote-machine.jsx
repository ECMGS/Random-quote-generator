
class QuoteBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            frsel: 0
        }

        this.numAleatorio = this.numAleatorio.bind(this);
    }

    componentDidMount() {
        this.numAleatorio();
    }

    numAleatorio() {

        var nAl = Math.round(Math.random()*35);

        this.setState({
            frsel: nAl
        })
    }

    render() {

        var frase = frases[this.state.Wfrsel];

        return (
            <div id="quote-box">
                <div id="center-card">
                    <div id="tweet-box">
                        <a id="tweet-quote" href={"https://twitter.com/intent/tweet?text="+frase[0]}>Comparte la frase</a>
                    </div>
                    <div>
                        <h2 id="text"><i>
                            "{frase[0]}"
                        </i></h2>
                        <h3 id="author">
                            - {frase[1]}
                        </h3>
                    </div>
                    <button id="new-quote" onClick={this.numAleatorio}>Sigue inspirandome...</button>
                </div>
            </div>
        )
    }
}

function pCargada() {
    ReactDOM.render(<QuoteBox />, document.getElementById("quote-app"))
}
import React, { Component } from "react";

export default class main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            val1: '',
            val2: '',
            op: "",
            result: "",
        };
    }

    addVal = (v, type) => {
        if (type === "1") {
            this.setState({ val1: v });
        } else {
            this.setState({ val2: v });
        }
    };

    addOp = (op) => {
        this.setState({ op: op });
    };

    getResult = () => {
        switch (this.state.op) {
            case "add":
                this.setState({ result: this.state.val1 + this.state.val2 })
                break;

            default:
                this.setState({ result: this.state.val1 - this.state.val2 })
                break;
        }
    }

    render() {
        return (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        width: 400,
                        height: 500,
                        background: "rgba(0,0,0,0.25)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div style={{ width: 200, height: 60, border: "1px solid #ccc" }}>
                        {this.state.result}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                        }}
                    >
                        <p
                            style={{
                                height: 50,
                                width: 50,
                                margin: 10,
                                border: "1px solid #ccc",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onClick={() => this.addVal(0, this.state.val1 === '' ? '1' : '2')}
                        >
                            0
            </p>
                        <p
                            style={{
                                height: 50,
                                width: 50,
                                margin: 10,
                                border: "1px solid #ccc",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onClick={() => this.addVal(1, this.state.val1 === '' ? '1' : '2')}
                        >
                            1
            </p>
                        <p
                            style={{
                                height: 50,
                                width: 50,
                                margin: 10,
                                border: "1px solid #ccc",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onClick={() => this.addVal(2, this.state.val1 === '' ? '1' : '2')}
                        >
                            2
            </p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                        }}
                    >
                        <p
                            style={{
                                height: 50,
                                width: 50,
                                margin: 10,
                                border: "1px solid #ccc",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            3
            </p>
                        <p
                            style={{
                                height: 50,
                                width: 50,
                                margin: 10,
                                border: "1px solid #ccc",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            4
            </p>
                        <p
                            style={{
                                height: 50,
                                width: 50,
                                margin: 10,
                                border: "1px solid #ccc",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            5
            </p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                        }}
                    >
                        <p
                            style={{
                                height: 50,
                                width: 50,
                                margin: 10,
                                border: "1px solid #ccc",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            6
            </p>
                        <p
                            style={{
                                height: 50,
                                width: 50,
                                margin: 10,
                                border: "1px solid #ccc",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            7
            </p>
                        <p
                            style={{
                                height: 50,
                                width: 50,
                                margin: 10,
                                border: "1px solid #ccc",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            8
            </p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                        }}
                    >
                        <p
                            style={{
                                height: 50,
                                width: 50,
                                margin: 10,
                                border: "1px solid #ccc",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            9
            </p>
                        <p
                            style={{
                                height: 50,
                                width: 50,
                                margin: 10,
                                border: "1px solid #ccc",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onClick={() => this.setState({ op: 'add' })}
                        >
                            +
            </p>
                        <p
                            style={{
                                height: 50,
                                width: 50,
                                margin: 10,
                                border: "1px solid #ccc",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            -
            </p>
                    </div>
                    <p
                        style={{
                            height: 50,
                            width: 200,
                            margin: 10,
                            border: "1px solid #ccc",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        onClick={() => this.getResult()}
                    >
                        =
          </p>
                </div>
            </div>
        );
    }
}

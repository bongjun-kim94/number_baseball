import React, { Component } from 'react';
import Try from './Try';

function getNumbers(){// 숫자 4개 겹치지 않고 뽑아주는 함수
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i=0; i<4; i+=1){
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}; 

class NumberBaseball extends Component {
    constructor(props){
        super(props);
        this.state = {
            result: '',
            value: '',
            answer: getNumbers(),
            tries: [], // push x
        };
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onSubmitForm = (e) => {
        const { result, value, tries, answer } = this.state;
        e.preventDefault();
        if (value == answer.join('')) {
            this.setState((prevState) => {
                return {
                    result: '홈런',
                    tries: [...prevState.tries, { try: value, result: '홈런'}],
                } 
            });

            alert('게임을 다시 시작합니다');
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: [],
            });
        } else { // 틀렸을시
            const answerArray = value.split('').map((V) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                this.setState({
                    result: `10번을 넘게 시도해서 실패! 답은 ${answer.join(',')}였습니다`,
                });
                alert('게임을 다시 시작합니다');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
            } else {
                for (let i = 0; i< 4; i+= 1) {
                    if(answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if(answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                    this.setState((prevState) => {
                        return {
                            tries: [...prevState.tries, { try: value, result: `${strike}`}],
                            value: '',
                        };
                    });
                }
            }
        }
    };

    onChangeInput = (e) => {
        console.log(this.state.answer);
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const { result, value, tries } = this.state;
        return(
            <>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={value} onChange={this.onChangeInput} />
                </form>
                <div>시도 : {tries.length}</div>
                <ul>
                    {tries.map((v, i) => {
                        return(
                            <Try key={`${i + 1}차 시도 :`} tryInfo={v} index={i} />
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default NumberBaseball;
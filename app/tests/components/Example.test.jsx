import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Example from 'Example';

describe('The Component', ()=>{
	it('should exist', ()=>{
		expect(Countdown).toExist();
	})
	
	describe('handleSetCountdown',()=>{
		
		var testExample = TestUtils.renderIntoDocument(<Example/>);
		
		it('can handle component functions and test state variables', ()=>{
			
			testExample._handleSetCountdown(10);
			
			expect(testExample.state.count).toBe(10);
			expect(testExample.state.countdownStatus).toBe('yep');		
			
		})		
		
		it('can handle ansyc with done', (done)=>{
		
			testExample._handleSetCountdown(1);			
			
			setTimeout(()=>{
				testExample(countdown.state.count).toBe(0);
				done();
			}, 2000);
		})		
		
		it('can test forms and events with spy', ()=>{
			var spy = expect.createSpy();
			var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
			var $el = $(ReactDOM.findDOMNode(countdownForm));

			countdownForm.refs.seconds.value = '109';
			TestUtils.Simulate.submit($el.find('form')[0]);

			expect(spy).toHaveBeenCalledWith(109);		
		})	

		it('spy enters invalid input', ()=>{
			var spy = expect.createSpy();
			var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
			var $el = $(ReactDOM.findDOMNode(countdownForm));

			countdownForm.refs.seconds.value = 'farfegnugin';
			TestUtils.Simulate.submit($el.find('form')[0]);

			expect(spy).toNotHaveBeenCalled();		
		})
		
	})
})
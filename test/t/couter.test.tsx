import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';
import 'mocha';
import * as React from 'react';

import Counter from '../../src/t/couter.component';


describe('Counter Test', ( ) => {

    it('Init Data', ( ) => {
        let c = shallow(<Counter />);
        expect( c.find('h3').text( )).to.equal('1');
    });

    it('add button', ( ) => {
        let c = mount(<Counter />);
        c.find('button').at(0).simulate('click');
        expect( c.find('h3').text( )).to.equal('2');
    })

    it('del button', ( ) => {
        let c = mount(<Counter />);
        c.find('button').at(1).simulate('click');
        expect( c.find('h3').text( )).to.equal('0');
    })


});


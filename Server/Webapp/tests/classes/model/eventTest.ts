///<reference path="../../typings/tsd.d.ts" />

import EventFactory = require("tests/factories/eventFactory");
import Event = require("app/model/event");

export var run = () => {
    event: Event;

    describe('EventTest', () => {
        beforeEach(() => this.event = EventFactory.createEvent());

        describe('set property begin', () => {
                it('changes the property', () => {
                    expect(this.event.times.begin)
                        .toEqual(new Date('2015-10-10T18:00:00.000Z'));

                    this.event.times.begin = new Date('2015-10-10T20:00:00.000Z');
                    expect(this.event.times.begin)
                        .toEqual(new Date('2015-10-10T20:00:00.000Z'));
                });
            }
        );
        
        describe('set property end', () => {
            it('changes the property', () => {
                expect(this.event.times.end)
                    .toEqual(new Date('2015-10-11T02:00:00.000Z'));

                this.event.times.end = new Date('2015-10-11T04:00:00.000Z');
                expect(this.event.times.end)
                    .toEqual(new Date('2015-10-11T04:00:00.000Z'));
            });
        });

        describe('property id', () => {
            it('is a UUID', () => {
                var uuidRegex = new RegExp('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}');
                expect(this.event.id).toMatch(uuidRegex);

                var eventPredefinedId = EventFactory.createEvent('76ba7b42-0534-4d1f-9c0c-5b07488b0c2c');
                expect(eventPredefinedId.id).toBe('76ba7b42-0534-4d1f-9c0c-5b07488b0c2c');
            });
        });

    });
}

//define(['tests/factories/eventFactory','app/model/event'],
//	function(EventFactory, Event) {
//	'use strict';

//	describe('Event', function() {
//		var event;

//		// setup
//		beforeEach(function() {
//			event = EventFactory.createEvent();
// 		});

//		describe('set property begin', function(){
//			it('changes the property', function() {
//				expect(event.begin)
//					.toEqual(new Date('2015-10-10T18:00:00.000Z'));
//				event.begin = new Date('2015-10-10T20:00:00.000Z');
//				expect(event.begin)
//					.toEqual(new Date('2015-10-10T20:00:00.000Z'));
//			});
//		});

//		describe('set property end', function() {
//			it('changes the property', function() {
//				expect(event.end)
//					.toEqual(new Date('2015-10-11T02:00:00.000Z'));
//				event.end = new Date('2015-10-11T04:00:00.000Z');
//				expect(event.end)
//					.toEqual(new Date('2015-10-11T04:00:00.000Z'));
//			});
//		});

//		describe('property id', function() {
//			it('is a UUID', function() {
//				var uuidRegex = new RegExp('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}');
//				expect(event.id).toMatch(uuidRegex);

//				var eventPredefinedId = EventFactory.createEvent('76ba7b42-0534-4d1f-9c0c-5b07488b0c2c');
//				expect(eventPredefinedId.id).toBe('76ba7b42-0534-4d1f-9c0c-5b07488b0c2c');
//			});
//		});
//	});
//});

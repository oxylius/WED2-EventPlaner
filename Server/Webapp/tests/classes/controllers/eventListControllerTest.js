define(['app/controllers/event/listController', 'frameworks/angular', 'libraries/angularMocks'],
	function (EventListController, Angular, AngularMocks) {
	    'use strict';

	    var scope, eventRepository;
	    //var $httpBackend;

	    beforeEach(AngularMocks.inject(function ($injector) {
	        scope = $injector.get('$rootScope').$new();

	        var events = [{ id: 1, name: 'Dinner' }, { id: 2, name: 'Lunch' }, { id: 3, name: 'Brunch' }];
	        // Mock repository to test controller only
	        eventRepository = {
	            all: () => {
	                return {
	                    then: function (callback) {
	                        return callback({
	                            data: {
	                                events: events
	                            }
	                        });
	                    }
	                };
	            }
	        };
	    }));

	    describe('EventListController', function () {
	        describe('property scope', function () {
	            it('contains 3 events', function () {
	                var eventListController = new EventListController(scope, eventRepository);
	                expect(3).toBe(eventListController.events.length);
	            });
	        });
	    });
	});

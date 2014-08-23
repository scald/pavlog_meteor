if (Meteor.isClient) {
    // client method stubs
    Meteor.methods({
        getSteps: function(string) {
            Session.set("stepData", "Getting steps...");
        }
    });

    Template.hello.rendered = function() {

        var video_games = [
            [1196463600000, 0],
            [1196550000000, 0],
            [1196636400000, 0],
            [1196722800000, 77],
            [1196809200000, 3636],
            [1196895600000, 3575],
            [1196982000000, 2736],
            [1197068400000, 1086],
            [1197154800000, 676],
            [1197241200000, 1205],
            [1197327600000, 906],
            [1197414000000, 710],
            [1197500400000, 639],
            [1197586800000, 540],
            [1197673200000, 435],
            [1197759600000, 301],
            [1197846000000, 575],
            [1197932400000, 481],
            [1198018800000, 591],
            [1198105200000, 608],
            [1198191600000, 459],
            [1198278000000, 234],
            [1198364400000, 1352],
            [1198450800000, 686],
            [1198537200000, 279],
            [1198623600000, 449],
            [1198710000000, 468],
            [1198796400000, 392],
            [1198882800000, 282],
            [1198969200000, 208],
            [1199055600000, 229],
            [1199142000000, 177],
            [1199228400000, 374],
            [1199314800000, 436],
            [1199401200000, 404],
            [1199487600000, 253],
            [1199574000000, 218],
            [1199660400000, 476],
            [1199746800000, 462],
            [1199833200000, 448],
            [1199919600000, 442],
            [1200006000000, 403],
            [1200092400000, 204],
            [1200178800000, 194],
            [1200265200000, 327],
            [1200351600000, 374],
            [1200438000000, 507],
            [1200524400000, 546],
            [1200610800000, 482],
            [1200697200000, 283],
            [1200783600000, 221],
            [1200870000000, 483],
            [1200956400000, 523],
            [1201042800000, 528],
            [1201129200000, 483],
            [1201215600000, 452],
            [1201302000000, 270],
            [1201388400000, 222],
            [1201474800000, 439],
            [1201561200000, 559],
            [1201647600000, 521],
            [1201734000000, 477],
            [1201820400000, 442],
            [1201906800000, 252],
            [1201993200000, 236],
            [1202079600000, 525],
            [1202166000000, 477],
            [1202252400000, 386],
            [1202338800000, 409],
            [1202425200000, 408],
            [1202511600000, 237],
            [1202598000000, 193],
            [1202684400000, 357],
            [1202770800000, 414],
            [1202857200000, 393],
            [1202943600000, 353],
            [1203030000000, 364],
            [1203116400000, 215],
            [1203202800000, 214],
            [1203289200000, 356],
            [1203375600000, 399],
            [1203462000000, 334],
            [1203548400000, 348],
            [1203634800000, 243],
            [1203721200000, 126],
            [1203807600000, 157],
            [1203894000000, 288]
        ];

        var activity = [
            [1196463600000, 0],
            [1196550000000, 0],
            [1196636400000, 0],
            [1196722800000, 770],
            [1196809200000, 3636],
            [1196895600000, 2000],
            [1196982000000, 400],
            [1197068400000, 800],
            [1197154800000, 6760],
            [1197241200000, 120],
            [1197327600000, 9060],
            [1197414000000, 7100],
            [1197500400000, 6390],
            [1197586800000, 5400],
            [1197673200000, 4350],
            [1197759600000, 3010],
            [1197846000000, 5750],
            [1197932400000, 4810],
            [1198018800000, 5910],
            [1198105200000, 6080],
            [1198191600000, 4590],
            [1198278000000, 2340],
            [1198364400000, 13520],
            [1198450800000, 6860],
            [1198537200000, 2790],
            [1198623600000, 4490],
            [1198710000000, 4680],
            [1198796400000, 3920],
            [1198882800000, 2820],
            [1198969200000, 2080],
            [1199055600000, 2290],
            [1199142000000, 1770],
            [1199228400000, 3740],
            [1199314800000, 4360],
            [1199401200000, 4040],
            [1199487600000, 2530],
            [1199574000000, 2180],
            [1199660400000, 4760],
            [1199746800000, 4620],
            [1199833200000, 4480],
            [1199919600000, 4420],
            [1200006000000, 4030],
            [1200092400000, 2040],
            [1200178800000, 1940],
            [1200265200000, 3270],
            [1200351600000, 3740],
            [1200438000000, 5070],
            [1200524400000, 5460],
            [1200610800000, 4820],
            [1200697200000, 2830],
            [1200783600000, 2210],
            [1200870000000, 4830],
            [1200956400000, 5230],
            [1201042800000, 5280],
            [1201129200000, 4830],
            [1201215600000, 4520],
            [1201302000000, 2700],
            [1201388400000, 2220],
            [1201474800000, 4390],
            [1201561200000, 5590],
            [1201647600000, 5210],
            [1201734000000, 4770],
            [1201820400000, 4420],
            [1201906800000, 2520],
            [1201993200000, 2360],
            [1202079600000, 5250],
            [1202166000000, 4770],
            [1202252400000, 3860],
            [1202338800000, 4090],
            [1202425200000, 4080],
            [1202511600000, 2370],
            [1202598000000, 1930],
            [1202684400000, 3570],
            [1202770800000, 4140],
            [1202857200000, 3930],
            [1202943600000, 3530],
            [1203030000000, 3640],
            [1203116400000, 2150],
            [1203202800000, 2140],
            [1203289200000, 3560],
            [1203375600000, 3990],
            [1203462000000, 3340],
            [1203548400000, 3480],
            [1203634800000, 2430],
            [1203721200000, 1260],
            [1203807600000, 1570],
            [1203894000000, 2880]
        ];
        // first correct the timestamps - they are recorded as the daily
        // midnights in UTC+0100, but Flot always displays dates in UTC
        // so we have to add one hour to hit the midnights in the plot

        for (var i = 0; i < video_games.length; ++i) {
            video_games[i][0] += 60 * 60 * 1000;
        }

        for (i = 0; i < activity.length; ++i) {
            activity[i][0] += 60 * 60 * 1000;
        }

        // helper for returning the weekends in a period

        function weekendAreas(axes) {

            var markings = [],
                d = new Date(axes.xaxis.min);

            // go to the first Saturday

            d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 1) % 7));
            d.setUTCSeconds(0);
            d.setUTCMinutes(0);
            d.setUTCHours(0);

            var i = d.getTime();

            // when we don't set yaxis, the rectangle automatically
            // extends to infinity upwards and downwards

            do {
                markings.push({
                    xaxis: {
                        from: i,
                        to: i + 2 * 24 * 60 * 60 * 1000
                    }
                });
                i += 7 * 24 * 60 * 60 * 1000;
            } while (i < axes.xaxis.max);

            return markings;
        }

        var options = {
            xaxis: {
                mode: "time",
                tickLength: 5
            },
            selection: {
                mode: "x"
            },
            grid: {
                markings: weekendAreas
            }
        };

        var plot = $.plot("#flot-2", [{
            label: "Video Games",
            data: video_games
        }, {
            label: "Steps",
            data: activity
        }], options);

        var overview = $.plot("#overview", [video_games,activity], {
            series: {
                lines: {
                    show: true,
                    lineWidth: 1
                },
                shadowSize: 0
            },
            xaxis: {
                ticks: [],
                mode: "time"
            },
            yaxis: {
                ticks: [],
                min: 0,
                autoscaleMargin: 0.1
            },
            selection: {
                mode: "x"
            }
        });

        // now connect the two

        $("#flot-2").bind("plotselected", function(event, ranges) {

            // do the zooming
            $.each(plot.getXAxes(), function(_, axis) {
                var opts = axis.options;
                opts.min = ranges.xaxis.from;
                opts.max = ranges.xaxis.to;
            });
            plot.setupGrid();
            plot.draw();
            plot.clearSelection();

            // don't fire event on the overview to prevent eternal loop

            overview.setSelection(ranges, true);
        });

        $("#overview").bind("plotselected", function(event, ranges) {
            plot.setSelection(ranges);
        });
    };

    Template.hello.events({
        'click input': function() {
            // template data, if any, is available in 'this'
            if (typeof console !== 'undefined')
                console.log("You pressed the button");
        }
    });

    Template.hello.steps = function() {
        return Session.get("stepData");
    };

    Meteor.startup(function() {
        Meteor.call("getSteps", function(error, data) {
            if (error) {
                console.log(error);
            }
            Session.set("stepData", data);

        });

    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        var fb = new Fitbit();

        Meteor.methods({
            // gets steps for past 7 days
            getSteps: function() {
                // we need to use "future" because our calls are async and the client
                // needs to wait to set values until after they come back from the server
                Future = Npm.require('fibers/future');
                var fut = new Future();

                fb.getSteps(function(data) {
                    console.log(data);
                    if (!("statusCode" in data && data.statusCode == 200)) {
                        console.log("ERROR getting steps from Fitbit.");
                        return false;
                    } else {
                        fut.return(data.content);
                    }
                });


                return fut.wait();

            }
        });
    });
}

Router.map(function() {
    this.route('hello', {
        path: '/'
    });

    this.route('connected_device', {
        path: '/connected_device',
        onAfterAction: function() {
            console.log(this.params);
        }
    });
});

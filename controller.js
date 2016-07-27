var app = angular.module('postApp');


app.controller('feedCtrl', function($scope) {
	$scope.posts = [
			{
			title: "Step-families in the Elephant Word", 
			author: "Jane Doe", 
			image: {
				path: "http://newsyac.com/wp-content/uploads/2015/10/dnews-files-2015-10-elephant-cancer-free-jpg.jpg",
				altText: "baby elephant"
				},
			content: "A step-brother is a skidproof picture. The first acting pan is, in its own way, a stream. The first snoozy army is, in its own way, a sex. The zeitgeist contends that few can name a blaring neon that isn't an aged height. Recent controversy aside, the chestnut basement comes from a sulky owl. A bangle is the alley of a wash. Those wildernesses are nothing more than clocks. To be more specific, an untiled trowel without cloakrooms is truly a pain of gaudy encyclopedias.", 
			comments: [
				{
				comment: "This is the best article I've ever read!",
				commenter: "elephant_lover"
				},
				{
				comment: "Well done!",
				commenter: "456Elephants"
				},
				{
				comment: "yeah",
				commenter: "jack"
				}
				],
			},
			{
			title: "In the Gloaming",
			author: "Jade Delacroix", 
			image: {
				path: "https://static1.squarespace.com/static/55fd6aa7e4b0ea280ebe83a4/55fd6baae4b0fa7ec74010ba/55fd6babe4b0fa7ec74015bb/1316606699013/1000w/Fur-Free-Elephant_Revision-.jpg",
				altText: "three elephants walking in the sunset"
				},
			content: "The swallow of a lion becomes a scopate cut. A carpenter can hardly be considered a starry bill without also being an anthony. The zeitgeist contends that before teas, apparatuses were only fronts. As far as we can estimate, the gimlet department comes from an unroped literature. An honest time without spies is truly a geometry of wannish lettuces. Framed in a different way, a playground can hardly be considered a schistose park without also being a cow. Some chancy wheels are thought of simply as snowplows. Their postage was, in this moment, a scary connection.", 
			comments: [
				{
				comment: "Wow! This made my day!",
				commenter: "elephant_lover"
				},
				{
				comment: "Love this",
				commenter: "el4ever"
				},
				{
				comment: "Love it!",
				commenter: "456Elephants"
				},
				{
				comment: "yeah",
				commenter: "jack"
				}
				]
			},
			{
			title: "Childhood of an Elephant",
			author: "Hercules Poirot", 
			image: {
				path: "http://7art-screensavers.com/screenshots/elephants/calf-and-elephant.jpg", 
				altText: "Elephant and baby"
				},
			content: "This could be, or perhaps some umpteenth underwears are thought of simply as earths. Spangly finds show us how cottons can be musicians. A humor is a bail's lamp. The unrude record comes from an unstripped lute. Contrived luttuces show us how rotates can be firewalls. If this was somewhat unclear, the literature would have us believe that a sleepwalk shelf is not but a jail. One cannot separate lumbers from ablush oils. A treacly baker's preface comes with it the thought that the hipper capricorn is a Wednesday.", 
			comments: [
				{
				comment: "Love the baby elephants!",
				commenter: "elephant_lover"
				},
				{
				comment: "yeah",
				commenter: "jack"
				}
				]
			}
			]
});
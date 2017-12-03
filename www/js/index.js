/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
		
		
					//var v_userId = 'gea_reyesvi@yahoo.com.mx';
					var v_id = '200';
					var v_userId = 'marlonruo@gmail.com';			
					
					//$("#chat").on('ready', function () {
						var alUser = {
									'userId' : v_userId,   //Replace it with the userId of the logged in user NOTE : userId need to be string and  +,*,? are not allowed chars in userId.
											//'password' : password,  //Put password here
											//	'authenticationTypeId' : 1,
									'applicationId' : '3b66345c921f7a78c8414e15221417cf7',  //replace "applozic-sample-app" with Application Key from Applozic Dashboard
									'deviceApnsType' : 0    //Set 0 for Development and 1 for Distribution (Release)
								};

						$applozic = applozic.login(alUser, function() {
							   applozic.registerPushNotification(function() {}, function(){});
							   applozic.launchChat(function() {}, function() {});
						}, function() {});					
					
					//});	
		
		
		//StatusBar.hide();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8450],{65319:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return b}});var n,o=a(22122),i=a(19756),s=(a(15007),a(64983)),r=a(99536),d=["components"],p={},c=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),l={_frontmatter:p},m=r.Z;function b(e){var t=e.components,a=(0,i.Z)(e,d);return(0,s.mdx)(m,(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"introduction-to-adobe-io-events-webhooks"},"Introduction to Adobe I/O Events Webhooks"),(0,s.mdx)("p",null,"With Adobe I/O Events webhooks, your application can sign up to be notified whenever certain events occur.\nFor example, when a user uploads a asset, this action generates an event.\nWith the right webhook in place, your application is instantly notified that this event happened."),(0,s.mdx)("p",null,"Please refer to the ",(0,s.mdx)("inlineCode",{parentName:"p"},"Adobe Developer Console")," documentation on how to ",(0,s.mdx)("a",{parentName:"p",href:"/adobe-io-events/developer-console/docs/guides/services/services-add-event/"},"Add Events to a project")),(0,s.mdx)("p",null,"To start receiving events, you create an event registration specifying a webhook URL and the types of events you want to receive. Each event will result in a HTTP request to the given URL, notifying your application. This guide provides an introduction to webhooks."),(0,s.mdx)("h2",{id:"getting-started"},"Getting started"),(0,s.mdx)("p",null,"An ",(0,s.mdx)("strong",{parentName:"p"},"Event")," is a JSON object that describes something that happened. Events originate from ",(0,s.mdx)("strong",{parentName:"p"},"Event Providers"),". Each event provider publishes specific types of events, identified by an ",(0,s.mdx)("strong",{parentName:"p"},"Event Code"),". A ",(0,s.mdx)("strong",{parentName:"p"},"Webhook URL")," receives event JSON objects as HTTP POST requests. You start receiving events by creating an ",(0,s.mdx)("strong",{parentName:"p"},"Event Registration"),", providing a name, description, webhook URL, and a list of ",(0,s.mdx)("strong",{parentName:"p"},"Event Types")," you are interested in."),(0,s.mdx)("h3",{id:"webhook-example"},"Webhook example"),(0,s.mdx)("p",null,"Acme Inc. wants to be notified when a new file is uploaded to Adobe Creative Cloud Assets, so it creates the following event registration:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Acme Webhook",\n  "description": "Listen for newly created files",\n  "webhook_url": "https://acme.example.com/webhook",\n  "events_of_interest": [\n    {\n      "provider": "ccstorage", \n      "event_code": "asset_created"\n    }\n  ]\n}\n')),(0,s.mdx)("p",null,"Now when a file is uploaded, Adobe I/O Events performs the following HTTP request:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-http"},'POST https://acme.example.com/webhook HTTP/1.1\ncontent-type: application/json\n\n{\n  "@id": "82235bac-2b81-4e70-90b5-2bd1f04b5c7b",\n  "@type": "xdmCreated",\n  "xdmEventEnvelope:objectType": "xdmAsset",\n  "activitystreams:published": "2016-07-16T19:20:30+01:00",\n  "activitystreams:to": {\n    "xdmImsOrg:id": "08B3E5CE5822FC520A494229@AdobeOrg",\n    "@type": "xdmImsOrg"\n  },\n  "activitystreams:generator": {\n    "xdmContentRepository:root": "http://francois.corp.adobe.com:4502/",\n    "@type": "xdmContentRepository"\n  },\n  "activitystreams:actor": {\n    "xdmAemUser:id": "admin",\n    "@type": "xdmAemUser"\n  },\n  "activitystreams:object": {\n    "@type": "xdmAsset",\n    "xdmAsset:asset_id": "urn:aaid:aem:4123ba4c-93a8-4c5d-b979-ffbbe4318185",\n    "xdmAsset:asset_name": "Fx_DUKE-small.png",\n    "xdmAsset:etag": "6fc55d0389d856ae7deccebba54f110e",\n    "xdmAsset:path": "/content/dam/Fx_DUKE-small.png",\n    "xdmAsset:format": "image/png"\n  },\n  "@context": {\n    "activitystreams": "http://www.w3.org/ns/activitystreams#",\n    "xdmEventEnvelope": "https://ns.adobe.com/xdm/common/eventenvelope#",\n    "xdmAsset": "http://ns.adobe.com/xdm/assets/asset#",\n    "xdmImsOrg": "https://ns.adobe.com/xdm/ims/organization#",\n    "xdmContentRepository": "https://ns.adobe.com/xdm/content/repository",\n    "xdmAemUser": "https://ns.adobe.com/xdm/aem/user#",\n    "xdmCreated": "https://ns.adobe.com/xdm/common/event/created#"\n  }\n}\n')),(0,s.mdx)("h2",{id:"your-first-webhook"},"Your first webhook"),(0,s.mdx)("p",null,"Before you can register a webhook, the webhook needs to be online and operational. If not, then the event registration will fail. So you need to take care of setting that up first. Your webhook must be hosted on a server. For development, you may use localhost along with a tool like ngrok (see below)."),(0,s.mdx)("p",null,"For production, your webhook needs to:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Be accessible from the internet (not using localhost)"),(0,s.mdx)("li",{parentName:"ul"},"Be reachable over HTTPS"),(0,s.mdx)("li",{parentName:"ul"},'Correctly respond to a "challenge" request')),(0,s.mdx)("p",null,"You may reuse/fork our ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/adobeio/io-event-sample-webhook"},"Sample Webhook in Node.js")),(0,s.mdx)("h3",{id:"the-challenge-request"},"The challenge request"),(0,s.mdx)("h4",{id:"synchronous-validation"},"Synchronous validation"),(0,s.mdx)("p",null,"When creating an event registration using a webhook, Adobe I/O Events will first try to verify that the URL is valid. To do this, it sends an HTTP GET request, with a ",(0,s.mdx)("inlineCode",{parentName:"p"},"challenge")," query parameter. The webhook should respond with a body containing the value of the ",(0,s.mdx)("inlineCode",{parentName:"p"},"challenge")," query parameter."),(0,s.mdx)("h5",{id:"request"},"Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-http"},"GET https://acme.example.com/webhook?challenge=8ec8d794-e0ab-42df-9017-e3dada8e84f7\n")),(0,s.mdx)("h5",{id:"response"},"Response"),(0,s.mdx)("p",null,"You can either respond by placing the challenge value directly in the response body:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\n\n"8ec8d794-e0ab-42df-9017-e3dada8e84f7"\n')),(0,s.mdx)("p",null,"or by responding with a JSON object, including the correct ",(0,s.mdx)("inlineCode",{parentName:"p"},"content-type")," header:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nContent-type: application/json\n\n{"challenge":"8ec8d794-e0ab-42df-9017-e3dada8e84f7"}\n')),(0,s.mdx)("p",null,"Typically, you would build your webhook to respond to the Adobe challenge in a method to handle HTTP GET requests, and then include another method for handling the HTTP POST requests that will be coming from Adobe containing actual event payloads. For testing purposes, you can start with something as simple as this PHP script: "),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n header('Content-Type: text/plain');\n echo $_GET['challenge']; \n?>\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Note:")," Make sure your response is given in the correct content type. If your webhook script places the challenge value directly in the response body, make sure it's returned as plain text (",(0,s.mdx)("inlineCode",{parentName:"p"},"text/plain"),"). For a JSON response, make sure it's ",(0,s.mdx)("inlineCode",{parentName:"p"},"application/json"),". Returning a response in the incorrect content type may cause extraneous code to be returned, which will not validate with Adobe I/O Events."),(0,s.mdx)("h4",{id:"asynchronous-validation"},"Asynchronous validation"),(0,s.mdx)("p",null,"When the webhook fails to respond appropriately to the challenge request, Adobe I/O Events sends an HTTP POST request with a body containing a custom URL for manual validation. "),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-http"},'POST https://acme.example.com/webhook HTTP/1.1\ncontent-type: application/json\n\n{"validationUrl": "https://csm.adobe.io/csm/registrations/validate?id=<guid1>&challenge=<guid2>"}\n')),(0,s.mdx)("p",null,"To complete verification, you need to send a GET request to it using a web browser/cURL or any simple REST client."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"curl -L -X GET 'https://csm.adobe.io/csm/registrations/validate?id=<guid1>&challenge=<guid2>'\n")),(0,s.mdx)("p",null,"The custom URL is valid for ",(0,s.mdx)("strong",{parentName:"p"},"5 minutes"),". If the validation is not completed within 5 minutes, your event registration is marked ",(0,s.mdx)("inlineCode",{parentName:"p"},"Disabled"),"."),(0,s.mdx)("p",null,"Your webhook must respond to the POST request with an HTTP status code of 200 before it can be put in the asynchronous validation mode. In other words, if the webhook responds with a 200, but doesn't respond with a body containing the challenge, it is switched to asynchronous validation mode. If there is a GET request on the validation URL within 5 minutes, the event registration is marked ",(0,s.mdx)("inlineCode",{parentName:"p"},"Active"),"."),(0,s.mdx)(c,{slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Please note that for ",(0,s.mdx)("strong",{parentName:"p"},"security")," reasons we ",(0,s.mdx)("strong",{parentName:"p"},"obfuscate")," the validation URL in the ",(0,s.mdx)("a",{parentName:"p",href:"/adobe-io-events/support/tracing/"},"debug tracing")," tab.\nSo, the only way to intercept the original validation URL is if you own the webhook server (",(0,s.mdx)("em",{parentName:"p"},"you could simply log all requests"),").",(0,s.mdx)("br",null),(0,s.mdx)("br",{parentName:"p"}),"\n",(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.3125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/45359964f5ec3dd1094c4c2b7ca4ac7a/cb523/debug_tracing_challenge_post_obfuscated.webp 320w","/adobe-io-events/static/45359964f5ec3dd1094c4c2b7ca4ac7a/797b9/debug_tracing_challenge_post_obfuscated.webp 640w","/adobe-io-events/static/45359964f5ec3dd1094c4c2b7ca4ac7a/4b075/debug_tracing_challenge_post_obfuscated.webp 1280w","/adobe-io-events/static/45359964f5ec3dd1094c4c2b7ca4ac7a/af4ae/debug_tracing_challenge_post_obfuscated.webp 1329w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/45359964f5ec3dd1094c4c2b7ca4ac7a/72799/debug_tracing_challenge_post_obfuscated.png 320w","/adobe-io-events/static/45359964f5ec3dd1094c4c2b7ca4ac7a/6af66/debug_tracing_challenge_post_obfuscated.png 640w","/adobe-io-events/static/45359964f5ec3dd1094c4c2b7ca4ac7a/21b4d/debug_tracing_challenge_post_obfuscated.png 1280w","/adobe-io-events/static/45359964f5ec3dd1094c4c2b7ca4ac7a/9ba38/debug_tracing_challenge_post_obfuscated.png 1329w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/45359964f5ec3dd1094c4c2b7ca4ac7a/21b4d/debug_tracing_challenge_post_obfuscated.png",alt:"Validation URL obfuscated in Debug Tracing tab",title:"Validation URL obfuscated in Debug Tracing tab",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("h3",{id:"testing-with-ngrok"},"Testing with ngrok"),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"https://ngrok.com/"},"Ngrok")," is a utility for enabling secure introspectable tunnels to your localhost. With ngrok, you can securely expose a local web server to the internet and run your own personal web services from your own machine, safely encrypted behind your local NAT or firewall. With ngrok, you can iterate quickly without redeploying your app or affecting your customers. "),(0,s.mdx)("p",null,"Among other things, ngrok is a great tool for testing webhooks. Once you've downloaded and installed ",(0,s.mdx)("a",{parentName:"p",href:"https://ngrok.com/"},"ngrok"),", you run it from a command line, specifying the protocol and port you want to monitor:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"ngrok http 80\n")),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"742px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"25.937500000000004%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/f9799fa826e7c26b50bf27b94e546257/cb523/ngrok.webp 320w","/adobe-io-events/static/f9799fa826e7c26b50bf27b94e546257/797b9/ngrok.webp 640w","/adobe-io-events/static/f9799fa826e7c26b50bf27b94e546257/9fd9e/ngrok.webp 742w"],sizes:"(max-width: 742px) 100vw, 742px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/f9799fa826e7c26b50bf27b94e546257/72799/ngrok.png 320w","/adobe-io-events/static/f9799fa826e7c26b50bf27b94e546257/6af66/ngrok.png 640w","/adobe-io-events/static/f9799fa826e7c26b50bf27b94e546257/0f2bc/ngrok.png 742w"],sizes:"(max-width: 742px) 100vw, 742px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/f9799fa826e7c26b50bf27b94e546257/0f2bc/ngrok.png",alt:"ngrok on port 80",title:"ngrok on port 80",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,'In the ngrok UI, you can see the URL for viewing the ngrok logs, labeled "Web Interface", plus the public-facing URLs ngrok generates to forward HTTP and HTTPS traffic to your localhost. You can use either of those public-facing URLs to register your Webhook with Adobe I/O, so long as your application is configured to respond on your localhost accordingly. Once your testing phase is complete, you can replace the ngrok URL in your Adobe I/O integration with the public URL for your deployed app.'),(0,s.mdx)("h2",{id:"create-a-project-in-the-adobe-developer-console"},"Create a project in the ",(0,s.mdx)("inlineCode",{parentName:"h2"},"Adobe Developer Console")),(0,s.mdx)("p",null,"Integrations are now created as part of a project within the ",(0,s.mdx)("inlineCode",{parentName:"p"},"Adobe Developer Console"),". This requires you to have access to the ",(0,s.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/devs_console_ui"},"Console")," in order to create a project, add events to your project, configure the events, and register your webhook."),(0,s.mdx)("p",null,"For detailed instructions on completing these steps, please begin by reading the ",(0,s.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/devs_console_getting_started"},(0,s.mdx)("inlineCode",{parentName:"a"},"Adobe Developer Console")," Getting Started guide"),"."),(0,s.mdx)("p",null,"Once you have completed the event registration, check the ngrok log. You should see a ",(0,s.mdx)("inlineCode",{parentName:"p"},"GET")," request, including the ",(0,s.mdx)("inlineCode",{parentName:"p"},"challenge")," that was passed along in the URL.  "),(0,s.mdx)("p",null,"  ",(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1009px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/ac02d04178e49965dec7cdf1c7138767/cb523/ngrok_2.webp 320w","/adobe-io-events/static/ac02d04178e49965dec7cdf1c7138767/797b9/ngrok_2.webp 640w","/adobe-io-events/static/ac02d04178e49965dec7cdf1c7138767/e3bd1/ngrok_2.webp 1009w"],sizes:"(max-width: 1009px) 100vw, 1009px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/ac02d04178e49965dec7cdf1c7138767/72799/ngrok_2.png 320w","/adobe-io-events/static/ac02d04178e49965dec7cdf1c7138767/6af66/ngrok_2.png 640w","/adobe-io-events/static/ac02d04178e49965dec7cdf1c7138767/f6f7a/ngrok_2.png 1009w"],sizes:"(max-width: 1009px) 100vw, 1009px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/ac02d04178e49965dec7cdf1c7138767/f6f7a/ngrok_2.png",alt:"The challenge GET request received in ngrok",title:"The challenge GET request received in ngrok",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"  "),(0,s.mdx)("p",null,"In the ",(0,s.mdx)("inlineCode",{parentName:"p"},"Adobe Developer Console"),", you will be taken to the ",(0,s.mdx)("em",{parentName:"p"},"Registration Details")," page once the event registration is complete. "),(0,s.mdx)("p",null,"The ",(0,s.mdx)("em",{parentName:"p"},"Status")," of the registration should show as ",(0,s.mdx)("strong",{parentName:"p"},"Active"),". If the registration shows as ",(0,s.mdx)("strong",{parentName:"p"},"Disabled")," please see the ",(0,s.mdx)("a",{parentName:"p",href:"#troubleshooting-a-disabled-registration-status"},"troubleshooting")," section that follows."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/cb523/events-registration-details.webp 320w","/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/797b9/events-registration-details.webp 640w","/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/4b075/events-registration-details.webp 1280w","/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/f3ff0/events-registration-details.webp 1920w","/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/a662b/events-registration-details.webp 2560w","/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/63161/events-registration-details.webp 2672w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/72799/events-registration-details.png 320w","/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/6af66/events-registration-details.png 640w","/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/21b4d/events-registration-details.png 1280w","/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/29114/events-registration-details.png 1920w","/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/c2d13/events-registration-details.png 2560w","/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/daf05/events-registration-details.png 2672w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/16dbba702552a01ef7f3deffda37bb13/21b4d/events-registration-details.png",alt:"Event Registration Details tab in Adobe Developer Console",title:"Event Registration Details tab in Adobe Developer Console",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("h3",{id:"troubleshooting-unstabledisabled-registration-status"},"Troubleshooting Unstable/Disabled Registration Status"),(0,s.mdx)("p",null,"If you made an error transcribing the webhook URL, Adobe I/O Events' test of your webhook would have failed, resulting in a ",(0,s.mdx)("strong",{parentName:"p"},"Disabled")," status."),(0,s.mdx)("p",null,"In general, ",(0,s.mdx)("inlineCode",{parentName:"p"},"Adobe I/O Events")," will always confirm that your webhook received an event by means of the response code your webhook sends to each HTTP POST request. "),(0,s.mdx)("p",null,"If ",(0,s.mdx)("inlineCode",{parentName:"p"},"Adobe I/O Events")," fails to receive a successful response code from your webhook within 10 seconds, it retries the request, including a special header ",(0,s.mdx)("inlineCode",{parentName:"p"},"x-adobe-retry-count")," (this header indicates how many times the delivery of an event or a batch of events has been attempted)."),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"Adobe I/O Events")," will keep on retrying delivery to your webhook for ",(0,s.mdx)("strong",{parentName:"p"},"24 hours")," using exponential and fixed backoff strategies. The first retry is attempted after 1 minute and the period between retries doubles after each attempt (second retry is after 2m, etc.), but is at most 15 minutes."),(0,s.mdx)("p",null,"If an event isn't delivered after 2 hours of retries, ",(0,s.mdx)("inlineCode",{parentName:"p"},"Adobe I/O Events")," marks the event registration as ",(0,s.mdx)("strong",{parentName:"p"},"Unstable"),", but still keeps on attempting delivery. This gives you sufficient time to restore your webhook, and avoid it from getting marked as Disabled. Once restored, it will be marked as ",(0,s.mdx)("strong",{parentName:"p"},"Active")," on the next successful event delivery."),(0,s.mdx)("p",null,"If all retry attempts get exhausted and the event still isn't delivered (webhook not responding or responding with a non ",(0,s.mdx)("inlineCode",{parentName:"p"},"2XX")," response), ",(0,s.mdx)("inlineCode",{parentName:"p"},"Adobe I/O Events")," drops the events, marks the event registration as ",(0,s.mdx)("strong",{parentName:"p"},"Disabled"),", and stops sending any further events."),(0,s.mdx)("p",null,"To restart the flow of requests, fix the problem preventing your webhook from responding. Then, log into the ",(0,s.mdx)("inlineCode",{parentName:"p"},"Adobe Developer Console")," and edit your events registration. This re-triggers a webhook challenge request, and eventually a re-activation of your event registration."),(0,s.mdx)("p",null,"Note: While your event registration is marked ",(0,s.mdx)("inlineCode",{parentName:"p"},"Disabled"),", Adobe will continue to log events in your Journal, allowing you to retrieve all events for the past 7 days (see our ",(0,s.mdx)("a",{parentName:"p",href:"./journaling_intro.md"},"Journaling documentation"),")."),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"Unstable Event Registration"),"\n",(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/83785cf5f0a32b6769cd0637d9360856/cb523/unstable-status.webp 320w","/adobe-io-events/static/83785cf5f0a32b6769cd0637d9360856/797b9/unstable-status.webp 640w","/adobe-io-events/static/83785cf5f0a32b6769cd0637d9360856/4b075/unstable-status.webp 1280w","/adobe-io-events/static/83785cf5f0a32b6769cd0637d9360856/f3ff0/unstable-status.webp 1920w","/adobe-io-events/static/83785cf5f0a32b6769cd0637d9360856/a662b/unstable-status.webp 2560w","/adobe-io-events/static/83785cf5f0a32b6769cd0637d9360856/23977/unstable-status.webp 2669w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/83785cf5f0a32b6769cd0637d9360856/72799/unstable-status.png 320w","/adobe-io-events/static/83785cf5f0a32b6769cd0637d9360856/6af66/unstable-status.png 640w","/adobe-io-events/static/83785cf5f0a32b6769cd0637d9360856/21b4d/unstable-status.png 1280w","/adobe-io-events/static/83785cf5f0a32b6769cd0637d9360856/29114/unstable-status.png 1920w","/adobe-io-events/static/83785cf5f0a32b6769cd0637d9360856/c2d13/unstable-status.png 2560w","/adobe-io-events/static/83785cf5f0a32b6769cd0637d9360856/b9139/unstable-status.png 2669w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/83785cf5f0a32b6769cd0637d9360856/21b4d/unstable-status.png",alt:"Unstable Status",title:"Example of an Unstable event registration",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"Disabled Event Registration"),"\n",(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/be4242cae45dc0bc3b49ad516b9ab8eb/cb523/disabled-status.webp 320w","/adobe-io-events/static/be4242cae45dc0bc3b49ad516b9ab8eb/797b9/disabled-status.webp 640w","/adobe-io-events/static/be4242cae45dc0bc3b49ad516b9ab8eb/4b075/disabled-status.webp 1280w","/adobe-io-events/static/be4242cae45dc0bc3b49ad516b9ab8eb/f3ff0/disabled-status.webp 1920w","/adobe-io-events/static/be4242cae45dc0bc3b49ad516b9ab8eb/a662b/disabled-status.webp 2560w","/adobe-io-events/static/be4242cae45dc0bc3b49ad516b9ab8eb/63161/disabled-status.webp 2672w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/be4242cae45dc0bc3b49ad516b9ab8eb/72799/disabled-status.png 320w","/adobe-io-events/static/be4242cae45dc0bc3b49ad516b9ab8eb/6af66/disabled-status.png 640w","/adobe-io-events/static/be4242cae45dc0bc3b49ad516b9ab8eb/21b4d/disabled-status.png 1280w","/adobe-io-events/static/be4242cae45dc0bc3b49ad516b9ab8eb/29114/disabled-status.png 1920w","/adobe-io-events/static/be4242cae45dc0bc3b49ad516b9ab8eb/c2d13/disabled-status.png 2560w","/adobe-io-events/static/be4242cae45dc0bc3b49ad516b9ab8eb/daf05/disabled-status.png 2672w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/be4242cae45dc0bc3b49ad516b9ab8eb/21b4d/disabled-status.png",alt:"Disabled Status",title:"Example of a Disabled event registration",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("h2",{id:"receiving-events"},"Receiving events"),(0,s.mdx)("p",null,"For development, you must first provide consent for yourself, using the following:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"https://ims-na1.adobelogin.com/ims/authorize/v1?response_type=code&client_id=api_key_from_console&scope=AdobeID%2Copenid%2Ccreative_sdk\n")),(0,s.mdx)("p",null,"You will replace ",(0,s.mdx)("inlineCode",{parentName:"p"},"api_key_from_console")," with the ",(0,s.mdx)("strong",{parentName:"p"},"Client ID")," value from the ",(0,s.mdx)("em",{parentName:"p"},"Credentials")," tab for the event registration details in Console."),(0,s.mdx)("p",null,"Log in to ",(0,s.mdx)("a",{parentName:"p",href:"https://assets.adobe.com"},"Creative Cloud Assets (<https://assets.adobe.com>)"),". Use the same Adobe ID as the one you used in the ",(0,s.mdx)("inlineCode",{parentName:"p"},"Adobe Developer Console"),". Now upload a file and check the ngrok logs again. If all went well, then an ",(0,s.mdx)("inlineCode",{parentName:"p"},"asset_created")," event was just delivered to your webhook. "),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1009px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/ac02d04178e49965dec7cdf1c7138767/cb523/ngrok_2.webp 320w","/adobe-io-events/static/ac02d04178e49965dec7cdf1c7138767/797b9/ngrok_2.webp 640w","/adobe-io-events/static/ac02d04178e49965dec7cdf1c7138767/e3bd1/ngrok_2.webp 1009w"],sizes:"(max-width: 1009px) 100vw, 1009px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/ac02d04178e49965dec7cdf1c7138767/72799/ngrok_2.png 320w","/adobe-io-events/static/ac02d04178e49965dec7cdf1c7138767/6af66/ngrok_2.png 640w","/adobe-io-events/static/ac02d04178e49965dec7cdf1c7138767/f6f7a/ngrok_2.png 1009w"],sizes:"(max-width: 1009px) 100vw, 1009px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/ac02d04178e49965dec7cdf1c7138767/f6f7a/ngrok_2.png",alt:"The POST request received in ngrok",title:"The POST request received in ngrok",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"  "),(0,s.mdx)("h3",{id:"receiving-events-for-users"},"Receiving events for users"),(0,s.mdx)("p",null,"In a real-world application, you would use the credentials of an authenticated user to register a webhook through the API. This way you will receive events related to that user. Depending on your scenario and the Adobe service you're targeting, you may have to enable different types of authentication; see the ",(0,s.mdx)("a",{parentName:"p",href:"/adobe-io-events/developer-console/docs/guides/authentication/"},"Adobe I/O Authentication Overview")," for more information on how to set up your app for authentication with your users."),(0,s.mdx)("p",null,"For Creative Cloud Asset events, you'll need to add the Creative Cloud Libraries to your integration and implement the User Auth UI; see ",(0,s.mdx)("a",{parentName:"p",href:"./using/cc-asset-event-setup.md"},"Setting Up Creative Cloud Asset Events")," for details. "),(0,s.mdx)("h2",{id:"security-considerations"},"Security Considerations"),(0,s.mdx)("p",null,"Your webhook URL must by necessity be accessible from the open internet. This means third-party actors can send forged requests to it, tricking your application into handling fake events."),(0,s.mdx)("p",null,"To prevent this from happening, Adobe I/O Events will add a ",(0,s.mdx)("inlineCode",{parentName:"p"},"x-adobe-signature")," header to each HTTP request it sends to your webhook URL, which allows you to verify that the request was really made by Adobe I/O Events."),(0,s.mdx)("p",null,'This signature or "message authentication code" is computed using a cryptographic hash function and a secret key applied to the body of the HTTP request. In particular, a SHA256 ',(0,s.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HMAC"},"HMAC")," is computed of the JSON payload, using the ",(0,s.mdx)("strong",{parentName:"p"},"Client Secret")," provided in the ",(0,s.mdx)("inlineCode",{parentName:"p"},"Adobe Developer Console")," as a secret key, and then turned into a Base64 digest. You can find your client secret in the ",(0,s.mdx)("em",{parentName:"p"},"Credentials")," tab for your event registration in Console."),(0,s.mdx)("p",null,"Upon receiving a request, you should repeat this calculation and compare the result to the value in the ",(0,s.mdx)("inlineCode",{parentName:"p"},"x-adobe-signature")," header, and reject the request unless they match. Since the client secret is known only by you and Adobe I/O Events, this is a reliable way to verify the authenticity of the request."),(0,s.mdx)(c,{variant:"info",slots:"text",mdxType:"InlineAlert"}),'Adobe strongly encourages validating your webhook deliveries using this mechanism to avoid processing "events" received from malicious third-party actors.',(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"HMAC check implementation in JavaScript (pseudo-code):")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},"var crypto = require('crypto')\nconst hmac = crypto.createHmac('sha256', CLIENT_SECRET)\nhmac.update(raw_request_body)\n \nif (request.header('x-adobe-signature') !== hmac.digest('base64')) {\n  throw new Error('x-adobe-signature HMAC check failed')\n}\n")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-index-md-f8ba8a2889a55545ba75.js.map
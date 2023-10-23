"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3840],{87246:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return b}});var n,o=a(87462),i=a(63366),s=(a(15007),a(64983)),r=a(91515),d=["components"],p={},c=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),l={_frontmatter:p},m=r.Z;function b(e){var t=e.components,a=(0,i.Z)(e,d);return(0,s.mdx)(m,(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"app-builder-with-io-events"},"App Builder with IO Events"),(0,s.mdx)("p",null,"In this guide, you will learn to leverage the power of IO Events to build event-driven applications with Adobe Developer App Builder.\nYou can listen to events coming from various Adobe Products and Services and build applications that respond to or process these events."),(0,s.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.mdx)("p",null,"You will first need to visit ",(0,s.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/devs_console_ui"},"Adobe Developer Console")," and create a new project from template in your organization and set up the workspaces using App Builder template. For detailed instructions, follow the steps outlined in this tutorial for ",(0,s.mdx)("a",{parentName:"p",href:"/adobe-io-events/developer-console/docs/guides/projects/projects-template/"},"creating a new project from template"),"."),(0,s.mdx)(c,{slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"The App Builder template is included as part of the App Builder SKU."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/3baafc9733293d207499c0bc75d12284/5530d/ab_select_project_from_template.webp 320w","/adobe-io-events/static/3baafc9733293d207499c0bc75d12284/0c8fb/ab_select_project_from_template.webp 640w","/adobe-io-events/static/3baafc9733293d207499c0bc75d12284/94b1e/ab_select_project_from_template.webp 1280w","/adobe-io-events/static/3baafc9733293d207499c0bc75d12284/0b34d/ab_select_project_from_template.webp 1920w","/adobe-io-events/static/3baafc9733293d207499c0bc75d12284/d5269/ab_select_project_from_template.webp 2560w","/adobe-io-events/static/3baafc9733293d207499c0bc75d12284/dfb75/ab_select_project_from_template.webp 3562w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/3baafc9733293d207499c0bc75d12284/dd4a7/ab_select_project_from_template.png 320w","/adobe-io-events/static/3baafc9733293d207499c0bc75d12284/0f09e/ab_select_project_from_template.png 640w","/adobe-io-events/static/3baafc9733293d207499c0bc75d12284/bbbf7/ab_select_project_from_template.png 1280w","/adobe-io-events/static/3baafc9733293d207499c0bc75d12284/ac7a9/ab_select_project_from_template.png 1920w","/adobe-io-events/static/3baafc9733293d207499c0bc75d12284/c7a69/ab_select_project_from_template.png 2560w","/adobe-io-events/static/3baafc9733293d207499c0bc75d12284/e32db/ab_select_project_from_template.png 3562w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/3baafc9733293d207499c0bc75d12284/bbbf7/ab_select_project_from_template.png",alt:"Select create project from template",title:"Select create project from template",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"Once the project and the workspaces have been created, add the ",(0,s.mdx)("em",{parentName:"p"},"I/O Management API")," service with ",(0,s.mdx)("em",{parentName:"p"},"OAuth Server to Server")," credentials to the Stage workspace and any other workspace you will be working with. This will add the required scope to the authentication token required for setting up the project with IO Events Registrations. For a step-by-step guide to adding an API to a project, follow this tutorial for ",(0,s.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/devs_projects_jwt"},"adding an API to a project using Service Account (JWT) authentication")," (the type of authentication used by the I/O Management API)."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/93d5372af97c1c39c5f277066a06d0d2/5530d/ab_add_io_management_api.webp 320w","/adobe-io-events/static/93d5372af97c1c39c5f277066a06d0d2/0c8fb/ab_add_io_management_api.webp 640w","/adobe-io-events/static/93d5372af97c1c39c5f277066a06d0d2/94b1e/ab_add_io_management_api.webp 1280w","/adobe-io-events/static/93d5372af97c1c39c5f277066a06d0d2/0b34d/ab_add_io_management_api.webp 1920w","/adobe-io-events/static/93d5372af97c1c39c5f277066a06d0d2/d5269/ab_add_io_management_api.webp 2560w","/adobe-io-events/static/93d5372af97c1c39c5f277066a06d0d2/a53dc/ab_add_io_management_api.webp 3356w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/93d5372af97c1c39c5f277066a06d0d2/dd4a7/ab_add_io_management_api.png 320w","/adobe-io-events/static/93d5372af97c1c39c5f277066a06d0d2/0f09e/ab_add_io_management_api.png 640w","/adobe-io-events/static/93d5372af97c1c39c5f277066a06d0d2/bbbf7/ab_add_io_management_api.png 1280w","/adobe-io-events/static/93d5372af97c1c39c5f277066a06d0d2/ac7a9/ab_add_io_management_api.png 1920w","/adobe-io-events/static/93d5372af97c1c39c5f277066a06d0d2/c7a69/ab_add_io_management_api.png 2560w","/adobe-io-events/static/93d5372af97c1c39c5f277066a06d0d2/9b2d2/ab_add_io_management_api.png 3356w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/93d5372af97c1c39c5f277066a06d0d2/bbbf7/ab_add_io_management_api.png",alt:"Add IO Management API",title:"Add IO Management API",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.75000000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/466aa55b5b308db2dff981c39077f907/5530d/ab_oauth_server_to_server.webp 320w","/adobe-io-events/static/466aa55b5b308db2dff981c39077f907/0c8fb/ab_oauth_server_to_server.webp 640w","/adobe-io-events/static/466aa55b5b308db2dff981c39077f907/94b1e/ab_oauth_server_to_server.webp 1280w","/adobe-io-events/static/466aa55b5b308db2dff981c39077f907/0b34d/ab_oauth_server_to_server.webp 1920w","/adobe-io-events/static/466aa55b5b308db2dff981c39077f907/d5269/ab_oauth_server_to_server.webp 2560w","/adobe-io-events/static/466aa55b5b308db2dff981c39077f907/b08c0/ab_oauth_server_to_server.webp 3388w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/466aa55b5b308db2dff981c39077f907/dd4a7/ab_oauth_server_to_server.png 320w","/adobe-io-events/static/466aa55b5b308db2dff981c39077f907/0f09e/ab_oauth_server_to_server.png 640w","/adobe-io-events/static/466aa55b5b308db2dff981c39077f907/bbbf7/ab_oauth_server_to_server.png 1280w","/adobe-io-events/static/466aa55b5b308db2dff981c39077f907/ac7a9/ab_oauth_server_to_server.png 1920w","/adobe-io-events/static/466aa55b5b308db2dff981c39077f907/c7a69/ab_oauth_server_to_server.png 2560w","/adobe-io-events/static/466aa55b5b308db2dff981c39077f907/6a405/ab_oauth_server_to_server.png 3388w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/466aa55b5b308db2dff981c39077f907/bbbf7/ab_oauth_server_to_server.png",alt:"Select oauth server-to-server credentials",title:"Select oauth server-to-server credentials",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"The workspace is now set up"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.99999999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/6cfd9fe4d9eb9659454054ccaacdbbd0/5530d/ab_workspace_setup_complete.webp 320w","/adobe-io-events/static/6cfd9fe4d9eb9659454054ccaacdbbd0/0c8fb/ab_workspace_setup_complete.webp 640w","/adobe-io-events/static/6cfd9fe4d9eb9659454054ccaacdbbd0/94b1e/ab_workspace_setup_complete.webp 1280w","/adobe-io-events/static/6cfd9fe4d9eb9659454054ccaacdbbd0/0b34d/ab_workspace_setup_complete.webp 1920w","/adobe-io-events/static/6cfd9fe4d9eb9659454054ccaacdbbd0/d5269/ab_workspace_setup_complete.webp 2560w","/adobe-io-events/static/6cfd9fe4d9eb9659454054ccaacdbbd0/a45b3/ab_workspace_setup_complete.webp 3090w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/6cfd9fe4d9eb9659454054ccaacdbbd0/dd4a7/ab_workspace_setup_complete.png 320w","/adobe-io-events/static/6cfd9fe4d9eb9659454054ccaacdbbd0/0f09e/ab_workspace_setup_complete.png 640w","/adobe-io-events/static/6cfd9fe4d9eb9659454054ccaacdbbd0/bbbf7/ab_workspace_setup_complete.png 1280w","/adobe-io-events/static/6cfd9fe4d9eb9659454054ccaacdbbd0/ac7a9/ab_workspace_setup_complete.png 1920w","/adobe-io-events/static/6cfd9fe4d9eb9659454054ccaacdbbd0/c7a69/ab_workspace_setup_complete.png 2560w","/adobe-io-events/static/6cfd9fe4d9eb9659454054ccaacdbbd0/d5591/ab_workspace_setup_complete.png 3090w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/6cfd9fe4d9eb9659454054ccaacdbbd0/bbbf7/ab_workspace_setup_complete.png",alt:"Workspace setup complete",title:"Workspace setup complete",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("h2",{id:"initialising-an-app-builder-app-with-io-events-template"},"Initialising an App Builder App with IO Events Template"),(0,s.mdx)("p",null,"Create a new folder where the code for the new app should be added and cd into the folder."),(0,s.mdx)("p",null,"In order to create a new app:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"run aio app init"),(0,s.mdx)("li",{parentName:"ul"},"Select the project. By default, the Project is initialized for Workspace Stage, you can run ",(0,s.mdx)("strong",{parentName:"li"},"'aio app use -w <workspace",">","'")," to switch workspace after initialisation."),(0,s.mdx)("li",{parentName:"ul"},"You will then be presented with an option to select a) All Templates, b) All Extensions and c) Only Templates Supported By My Org. Choose either a or c"),(0,s.mdx)("li",{parentName:"ul"},"Select @adobe/generator-app-events-generic using <space",">"," and press <enter",">")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-shell"},"app-builder-app % aio app init\n? Select Org: Adobe IO DevRel\n? Select a Project, or press + to create new: Demo App Builder With Events\n? What templates do you want to search for? Only Templates Supported By My Org\n✔ Downloaded the list of templates\n? Choose the template(s) to install:\n  Pressing <enter> without selection will skip templates and install a standalone application.\n  \n┌──────┬─────────────────────────────┬─────────────────────────────┬──────────────────┬──────────────────┐\n│      │ Template                    │ Description                 │ Extension Point  │ Categories       │\n├──────┼─────────────────────────────┼─────────────────────────────┼──────────────────┼──────────────────┤\n│ ❯◉   │ @adobe/generator-app-events │ Adds event registrations    │ N/A              │ action, events   │\n│      │ -generic *                  │ and a generic action        │                  │                  │\n├──────┼─────────────────────────────┼─────────────────────────────┼──────────────────┼──────────────────┤\n│  ◯   │ @adobe/commerce-events-ext- │ Extensibility template for  │ N/A              │ action, events   │\n│      │ tpl *                       │ handling Commerce events    │                  │                  │\n├──────┼─────────────────────────────┼─────────────────────────────┼──────────────────┼──────────────────┤\n│  ◯   │ @adobe/generator-app-api-me │ Extensibility template for  │ N/A              │ action, graphql- │\n│      │ sh *                        │ Adobe API Mesh, for App     │                  │ mesh             │\n│      │                             │ Builder                     │                  │                  │\n├──────┼─────────────────────────────┼─────────────────────────────┼──────────────────┼──────────────────┤\n│  ◯   │ @adobe/generator-app-asset- │ Extensibility template for  │ dx/asset-compute │ action           │\n│      │ compute *                   │ generator-aio-app           │ /worker/1        │                  │\n└──────┴─────────────────────────────┴─────────────────────────────┴──────────────────┴──────────────────┘\n* = recommended by Adobe; to learn more about the templates, go to https://\nadobe.ly/templates\n")),(0,s.mdx)("p",null,"This will now fetch the workspace details and configure your local app"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-shell"},"Bootstrapping code in: app-builder-app\n   create package.json\n   create README.md\n   create jest.setup.js\n   create .env\n   create .gitignore\n \nChanges to package.json were detected.\nSkipping package manager install.\n \n   create .github/workflows/deploy_prod.yml\n   create .github/workflows/deploy_stage.yml\n   create .github/workflows/pr_test.yml\nℹ Installing template @adobe/generator-app-events-generic\nℹ Installing npm package @adobe/generator-app-events-generic\n...\n")),(0,s.mdx)("p",null,"You will be prompted for the following details to set up your webhook registrations"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Name for the non-web runtime action")),(0,s.mdx)("p",null,"Each registration is associated with a runtime action, so this template will also add a non-web action that can be modified to react to the events subscribed to by the event registration. Let us name this action event-action-1 or you can use the default name"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-shell"},"✔ Installed npm package @adobe/generator-app-events-generic\nℹ Running template @adobe/generator-app-events-generic\n? We are about to create a new sample action that A generic action that logs the events received from IO Events.\nHow would you like to name this action? event-action-1\n")),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Name for the registration (Any valid name with a minimum of 3 and a maximum of 255 characters, and must be unique in the context of the workspace )")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-shell"},"? We are about to create a new Event registration.\nHow would you like to name this registration? Registration 1\n")),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"A description about what the registration is being created for")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-shell"},"? What is this registration being created for? Test app builder app with event registrations\n")),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Choose one or more provider metadata")),(0,s.mdx)(c,{slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Provider metadata:")," Provider metadata indicates a family of providers. It describes the source of events and is categorised under one of the following groups: Creative Cloud, Document Cloud, Experience Cloud and Experience Platform. For eg. Commerce Events is an Experience Cloud product that emits events that can be consumed by subscribing to the Commerce Events provider metadata."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-shell"},"? Choose from the following provider families ( provider metadata ) (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)\n ◯ Cloud Manager Events\n ◯ Data Hygiene\n❯◉ Imaging API Events\n ◯ Adobe Document Cloud\n ◉ Marketo User Audit Data Stream\n(Move up and down to reveal more choices)\n")),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Provider Selection")),(0,s.mdx)(c,{slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"IO Events Provider:")," Some provider metadata have one or more instances that emit events. Each instance is registered as an IO Events Provider under the specific provider metadata. For eg. an organisation may have multiple instance of Adobe Commerce. Each instance is registered as a different provider. Some provider metadata have only a single source of events. Such provider metadata consist of only a single provider per organisation."),(0,s.mdx)("p",null,"For multi-instance provider metadata, select an instance to listen to events from, and in case of single instance provider metadata, select the specified provider by pressing \\<enter",">"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-shell"},"? Choose from below provider for provider metadata: di_event_code (Use arrow keys)\n❯ Imaging API Events\n")),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Event metadata Selection")),(0,s.mdx)(c,{slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Event Metadata:")," Providers consist of several types of events that are emitted. These represent the event metadata. For eg. Imaging API Events emits events of type: Imagecutout api events, photoshop api events and lightroom api events."),(0,s.mdx)("p",null,"Select the type of events you are interested in listening to."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-shell"},"? Choose event metadata for provider: Imaging API Events (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)\n ◯ Imagecutout API events\n❯◉ Photoshop API events\n ◉ Lightroom API events\n")),(0,s.mdx)("p",null,"The provider and event metadata selection will repeat for every provider metadata that was selected."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-shell"},"? Choose from below provider for provider metadata: dx_marketo_audit_user Marketo User Audit Data Stream\n? Choose event metadata for provider: Marketo User Audit Data Stream (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)\n ◯ User\n ◉ Smart Campaign\n❯◉ Email\n ◉ Email Batch Program\n ◯ Folder\n")),(0,s.mdx)("p",null,"This together constitutes the ",(0,s.mdx)("strong",{parentName:"p"},"Events of Interest"),"."),(0,s.mdx)("p",null,"The template finishes running successfully, thereby initialising your app with a sample non-web action 'event-action-1' that logs every event it receives belonging to one of the events of interest selected in the provider and event metadata selection."),(0,s.mdx)("p",null,"The app.config.yaml is initialised with the runtimeManifest and event registration"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-yaml"},"application:\n  runtimeManifest:\n    packages:\n      app-builder-app:\n        license: Apache-2.0\n        actions:\n          event-action-1:\n            function: actions/event-action-1/index.js\n            web: 'no'\n            runtime: nodejs:16\n            inputs:\n              LOG_LEVEL: debug\n            annotations:\n              require-adobe-auth: false\n              final: true\n  events:\n    registrations:\n      Registration 1:\n        description: Test app builder app with event registrations\n        events_of_interest:\n          - provider_metadata: di_event_code\n            event_codes:\n              - photoshop-job-status\n              - lightroom-job-status\n          - provider_metadata: dx_marketo_audit_user\n            event_codes:\n              - com.adobe.platform.marketo.audit.user.smartcampaign\n              - com.adobe.platform.marketo.audit.user.email\n              - com.adobe.platform.marketo.audit.user.emailbatchprogram\n        runtime_action: app-builder-app/event-action-1\n")),(0,s.mdx)("p",null,"And .env file contains the required env variable"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-dotenv"},"## Provider metadata to provider id mapping\nAIO_EVENTS_PROVIDERMETADATA_TO_PROVIDER_MAPPING=di_event_code:provider-id-1,dx_marketo_audit_user:provider-id-2\n")),(0,s.mdx)("h2",{id:"adding-event-registrations-to-your-app-using-the-events-generic-template"},"Adding Event registrations to your app using the Events Generic Template"),(0,s.mdx)("p",null,"You can add more event registrations to your application using the command ",(0,s.mdx)("strong",{parentName:"p"},"aio app add events")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-shell"},"app-builder-app % aio app add events\n✔ Downloaded the list of templates\n? Choose the template(s) to install:\n  Pressing <enter> without selection will skip templates and install a standalone application.\n  \n┌──────┬────────────────────────────────────────┬────────────────────────────────────────┬──────────────────────────┬──────────────────────────┐\n│      │ Template                               │ Description                            │ Extension Point          │ Categories               │\n├──────┼────────────────────────────────────────┼────────────────────────────────────────┼──────────────────────────┼──────────────────────────┤\n│ ❯◉   │ @adobe/generator-add-events-generic *  │ Adds event registrations and a generic │ N/A                      │ helper-template, events  │\n│      │                                        │ action                                 │                          │                          │\n└──────┴────────────────────────────────────────┴────────────────────────────────────────┴──────────────────────────┴──────────────────────────┘\n \n* = recommended by Adobe; to learn more about the templates, go to https://adobe.ly/templates\n")),(0,s.mdx)("p",null,"Select @adobe/generator-add-events-generic and follow the steps to install the template"),(0,s.mdx)("p",null,"Here you will be presented with an option to either use an existing runtime action or create a new runtime action. If you choose to use an existing runtime action, you will be able to choose from the list of non-web actions present in the runtimeManifest of your application. Follow all other steps to add name, description and events of interest to your event registration as described in the previous section"),(0,s.mdx)("h2",{id:"deploying-the-application"},"Deploying the Application"),(0,s.mdx)("p",null,"Deploy the application using"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-shell"},"aio app deploy\n")),(0,s.mdx)("p",null,"This will deploy the actions and create the event registrations."),(0,s.mdx)("p",null,"You should also be able to see the registrations on Developer Console"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/2aca5acc51fa87fcb2a86c649c94cd7d/5530d/ab_deployed_registrations.webp 320w","/adobe-io-events/static/2aca5acc51fa87fcb2a86c649c94cd7d/0c8fb/ab_deployed_registrations.webp 640w","/adobe-io-events/static/2aca5acc51fa87fcb2a86c649c94cd7d/94b1e/ab_deployed_registrations.webp 1280w","/adobe-io-events/static/2aca5acc51fa87fcb2a86c649c94cd7d/0b34d/ab_deployed_registrations.webp 1920w","/adobe-io-events/static/2aca5acc51fa87fcb2a86c649c94cd7d/d5269/ab_deployed_registrations.webp 2560w","/adobe-io-events/static/2aca5acc51fa87fcb2a86c649c94cd7d/9b54d/ab_deployed_registrations.webp 2602w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/adobe-io-events/static/2aca5acc51fa87fcb2a86c649c94cd7d/dd4a7/ab_deployed_registrations.png 320w","/adobe-io-events/static/2aca5acc51fa87fcb2a86c649c94cd7d/0f09e/ab_deployed_registrations.png 640w","/adobe-io-events/static/2aca5acc51fa87fcb2a86c649c94cd7d/bbbf7/ab_deployed_registrations.png 1280w","/adobe-io-events/static/2aca5acc51fa87fcb2a86c649c94cd7d/ac7a9/ab_deployed_registrations.png 1920w","/adobe-io-events/static/2aca5acc51fa87fcb2a86c649c94cd7d/c7a69/ab_deployed_registrations.png 2560w","/adobe-io-events/static/2aca5acc51fa87fcb2a86c649c94cd7d/de60c/ab_deployed_registrations.png 2602w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-io-events/static/2aca5acc51fa87fcb2a86c649c94cd7d/bbbf7/ab_deployed_registrations.png",alt:"Registrations on Console after deploying the app",title:"Registrations on Console after deploying the app",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"Registrations are uniquely identified by the registration name. For registration names that are already part of the workspace, deploying the app will update the registrations, and for those that do not exist, deploying will create the registrations. No registrations are deleted when you just use ",(0,s.mdx)("strong",{parentName:"p"},"aio app deploy")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-shell"},"aio app deploy --force-events\n")),(0,s.mdx)("p",null,"On using this flag, all other registrations that are not part of the config file, but are part of the workspace will be deleted. Thus the workspace will be exactly in sync with the current state of the config file of the app builder app."),(0,s.mdx)("p",null,"See more details on ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/guides/deployment/"},"App Builder deployment")),(0,s.mdx)("h2",{id:"un-deploying-the-application"},"Un-deploying the Application"),(0,s.mdx)("p",null,"Undeploy the application using"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-shell"},"aio app undeploy\n")),(0,s.mdx)("p",null,"This will undeploy all the actions and delete all event registrations that are part of the config file"))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-appbuilder-index-md-6800418bc0ccaef2ee36.js.map
[Active Video](https://tools.publicis.sapient.com/confluence/display/CGDMP/UCM3+-+Active+Video)
===========================

UCM3 - Active Video (dark theme) - inline DAM instance 1 no autoPlay and temporal fragmentation (total duration is 30s, start time is 20s, end time is 25s, segment duration is 5s)
```playground
<FCA.ActiveVideo
  theme="dark"
  autoPlay={false}
  activeVideo = {{
    "videoType": "DAM",
    "target": "inline",
    "videoSrc": "/assets/video/chrysler-social.mp4",
    "stillImage": {
      "xs": ["//placehold.it/320x240", "//placehold.it/320x240 2x"],
      "sm": ["//placehold.it/320x240", "//placehold.it/320x240 2x"],
      "md": ["//placehold.it/768x576", "//placehold.it/768x576 2x"],
      "lg": ["//placehold.it/1280x720", "//placehold.it/1280x720 2x"],
      "alt": "Placeholder Images"
    },
    "videoLayout": "standard",
    "transformOriginX": 100,
    "transformOriginY": 100,
    "isOverlay": true,
    "overlayTheme": "dark",
    "playIcon": "play",
    "duration": "0.30",
    "preTitleStyle": "gcss-typography-utility-heading-5",
    "title": "An Obsessive/Compulsive Vampire",
    "titleStyle": "gcss-typography-brand-heading-1",
    "lpos": "video-lpos",
    "lid": "video-lid",
    "linktype": "video-linktype",
    "videoTrackingId": "video1",
    "disclaimer": "This is the disclaimer"
  }}
  segment={{
    "startTime": "00:00:20",
    "endTime": "00:00:25",
    "segmentDuration": 5
  }}
  transcriptButton={{
    "lid": "lid",
    "lpos": "lpos",
    "content": "(Scene begins with Count Von Count coming into scene, stage left, and approaching the back of an open van.  Inside the van are a variety of pumpkins, hay, and other American harvest related things.  The Count sits on the edge of the open back hatch of the car)\r\n\r\nCOUNT: \"Ah well.  All of the trick and treaters have gone home.  Whatever shall I count now?\"\r\n\r\n(The camera zooms out to show that the van\'s left signal light is flashing repeatedly on and off.  The count is intrigued.)\r\n\r\nCOUNT: \"I shall count blinky lights!  Haha!\"\r\n\r\n(The Count starts counting enthusiastically.)\r\n\r\nCOUNT: \"That\'s 1-2-3-4-5-6-7-8-9-10 ...Haha!\"\r\n\r\n(The scene abruptly ends.)\r\n"
  }}

/>
```

UCM3 - Active Video (light theme) - inline DAM instance 1 no autoPlay and temporal fragmentation (total duration is 30s, start time is 20s, end time is 25s, segment duration is 5s)
```playground
<FCA.ActiveVideo
  theme="light"
  autoPlay={false}
  activeVideo = {{
    "videoType": "DAM",
    "target": "inline",
    "videoSrc": "/assets/video/chrysler-social.mp4",
    "stillImage": {
      "xs": ["//placehold.it/320x240", "//placehold.it/320x240 2x"],
      "sm": ["//placehold.it/320x240", "//placehold.it/320x240 2x"],
      "md": ["//placehold.it/768x576", "//placehold.it/768x576 2x"],
      "lg": ["//placehold.it/1280x720", "//placehold.it/1280x720 2x"],
      "alt": "Placeholder Images"
    },
    "videoLayout": "standard",
    "transformOriginX": 100,
    "transformOriginY": 100,
    "isOverlay": true,
    "overlayTheme": "dark",
    "playIcon": "play",
    "duration": "0.30",
    "preTitleStyle": "gcss-typography-utility-heading-5",
    "title": "An Obsessive/Compulsive Vampire",
    "titleStyle": "gcss-typography-brand-heading-1",
    "lpos": "video-lpos",
    "lid": "video-lid",
    "linktype": "video-linktype",
    "videoTrackingId": "video1",
    "disclaimer": "This is the disclaimer"
  }}
  segment={{
    "startTime": "00:00:20",
    "endTime": "00:00:25",
    "segmentDuration": 5
  }}
  transcriptButton={{
    "lid": "lid",
    "lpos": "lpos",
    "content": "(Scene begins with Count Von Count coming into scene, stage left, and approaching the back of an open van.  Inside the van are a variety of pumpkins, hay, and other American harvest related things.  The Count sits on the edge of the open back hatch of the car)\r\n\r\nCOUNT: \"Ah well.  All of the trick and treaters have gone home.  Whatever shall I count now?\"\r\n\r\n(The camera zooms out to show that the van\'s left signal light is flashing repeatedly on and off.  The count is intrigued.)\r\n\r\nCOUNT: \"I shall count blinky lights!  Haha!\"\r\n\r\n(The Count starts counting enthusiastically.)\r\n\r\nCOUNT: \"That\'s 1-2-3-4-5-6-7-8-9-10 ...Haha!\"\r\n\r\n(The scene abruptly ends.)\r\n"
  }}

/>
```

UCM3 - Active Video - inline external video source with temporal fragmentation (total duration is 50s, start time is 30s, end time is 40s, segment duration is 10s)
```playground
<FCA.ActiveVideo
  activeVideo = {{
    "videoType": "external",
    "target": "inline",
    "videoSrc": "0t-pV9rOcPE", /* "Lj-bj6Inqdg", */
    "stillImage": {
      "xs": ["//placehold.it/320x240", "//placehold.it/320x240 2x"],
      "sm": ["//placehold.it/320x240", "//placehold.it/320x240 2x"],
      "md": ["//placehold.it/768x576", "//placehold.it/768x576 2x"],
      "lg": ["//placehold.it/1280x720", "//placehold.it/1280x720 2x"],
      "alt": "Placeholder Images"
    },
    "videoLayout": "standard",
    "transformOriginX": 100,
    "transformOriginY": 100,
    "overlayTheme": "light",
    "playIcon": "play",
    "duration": "0.50",
    "preTitle": "Alliteration At Its Best",
    "preTitleStyle": "gcss-typography-utility-heading-6",
    "title": "2015 Chrysler 200",
    "titleStyle": "",
    "subTitle": "ParkSense®",
    "subTitleStyle": "gcss-typography-utility-heading-6",
    "lpos": "video-lpos",
    "lid": "video-lid",
    "linktype": "video-linktype",
    "disclaimer": "This is the disclaimer"
  }}
  segment={{
    "startTime": "00:00:30",
    "endTime": "00:00:40",
    "segmentDuration": 10
  }}
/>
```

UCM3 - Active Video - modal external video source with temporal fragmentation (total duration is 29 min 47s, start time is 30s, end time is 40s, segment duration is 10s)
```playground
<FCA.ActiveVideo
  theme="light"
  activeVideo = {{
    "compId":"activeVideo-temporal-modal-1",
    "videoType": "external",
    "target": "modal",
    "mediaModal": {
        "mediaType": "activeVideo",
        "mediaContent": {
          "videoSrc": "MGuKhcnrqGA",
          "mediaSrc": "external",
          "videoTrackingId": "video4"
        },
        "mediaDescriptionBar": {
          "mediaTitle": "title1",
          "mediaDescription": "description1",
          "lpos": "",
          "downloadLid":"",
          "downloadIcon":"download"
        }
    },
    "stillImage": {
      "xs": ["//placehold.it/320x240", "//placehold.it/320x240 2x"],
      "sm": ["//placehold.it/320x240", "//placehold.it/320x240 2x"],
      "md": ["//placehold.it/768x576", "//placehold.it/768x576 2x"],
      "lg": ["//placehold.it/1280x720", "//placehold.it/1280x720 2x"],
      "alt": "Placeholder Images"
    },
    "videoLayout": "standard",
    "transformOriginX": 100,
    "transformOriginY": 100,
    "overlayTheme": "light",
    "playIcon": "play",
    "duration": "29.47",
    "preTitle": "YouTube Video",
    "preTitleStyle": "gcss-typography-utility-heading-6",
    "title": "React.js Conf 2016",
    "titleStyle": "",
    "subTitle": "Nick Schrock - Keynote",
    "subTitleStyle": "gcss-typography-utility-heading-6",
    "lpos": "video-lpos",
    "lid": "video-lid",
    "linktype": "video-linktype",
    "disclaimer": "This is the disclaimer"
  }}
  segment={{
    "startTime": "00:00:30",
    "endTime": "00:00:40",
    "segmentDuration": 10
  }}
  transcriptButton={{
    "lid": "lid",
    "lpos": "lpos",
    "content": "Making the Web Accessible to People with Disabilities\r\nShawn Lawton Henry, W3C Web Accessibility Initiative (WAI)\r\nMalaysian Communications and Multimedia Commission (SKMM), Universal Service Provision (USP) Technology Seminar\r\nJune 2008\r\n\r\nHi. I'm Shawn Henry from the World Wide Web Consortium Web Accessibility Initiative. Thank you very much for inviting me to this USP Technology Seminar.\r\n\r\nI am excited about the work of the Malaysian Communications and Multimedia Commission, and especially the inclusion of people with disabilities in the upcoming Universal Service Provision programs. I appreciate the opportunity to talk to you today about making the Web accessible to people with disabilities and the benefits of this to others. I would have loved to be there in person today. Please do contact me if you want additional information, or to share your perspectives.\r\n\r\nAt the seminar today, distinguished speakers have talked about wireless and wired technologies to connect rural communities and improve broadband connectivity. These connections are one aspect of providing Internet access to underserved communities.\r\n\r\nThere is another important aspect, and that is making websites themselves accessible for all.\r\n\r\n“Web accessibility” focuses primarily on making the Web accessible to people with disabilities. Accessibility also makes the Web more usable for:\r\n\r\n    older users with accessibility needs due to aging\r\n    people with low bandwidth connections\r\n    people using older hardware and software\r\n    people who are new Internet users\r\n    people using mobile devices to access the Web\r\n    people who are not fluent in the language of the website\r\n\r\nCurrently there are significant barriers on the Web for many people with disabilities. Because most web developers do not make their websites and their websites accessible, many people with disabilities have unnecessary difficulties using the Web, and in some cases, cannot effectively use it at all. For example, when developers require mouse interactions to use a website, people who cannot use a mouse have great difficulty; and when podcasts or other audio information is not provided in a text transcript or other accessible format, people who are deaf cannot get the information.\r\n\r\nHowever, when websites are accessible, they enable people with disabilities to use the Web effectively. For example, people who are blind use screen readers that read aloud the information from the web page. When a web developer puts an image on her web page, she should provide alternative text for that image. Then, when a screen reader gets to the image, it reads the text for the image.\r\n\r\nAll website owners and web developers have responsibility for making their websites accessible.\r\n\r\nThere are international standards that organizations and developers can use to know what they need to do for Web accessibility, and what other web software needs to do for accessibility. These are from the W3C Web Accessibility Initiative.\r\n\r\nThe W3C is the World Wide Web Consortium that develops interoperable technologies such as HTML, CSS, XML, etc. The W3C provides these open Web standards so that the most fundamental Web technologies are compatible with one another and allow any software or hardware used to access the Web to work together.\r\n\r\nWithin the W3C is the Web Accessibility Initiative (WAI). WAI works with organizations around the world to develop strategies, guidelines, and resources to help make the Web accessible to people with disabilities and more usable for all. WAI's accessibility guidelines are recognized as the international standard for web accessibility. There are currently three main accessibility guidelines from the W3C WAI.\r\n\r\nThe Web Content Accessibility Guidelines (WCAG) tells web developers how to make their website accessible. WCAG itself provides a stable standard, and the supporting resources provide examples and guidance on implementing accessibility in specific technologies, like HTML and CSS. WCAG 2.0 is [nearing completion] and now is a good time for organizations to look at adopting WCAG 2.0 when it is finalized, and now is a good time for developers to start working with it in their current web projects.\r\n\r\nA related developing technology is the Accessible Rich Internet Applications Suite (WAI-ARIA). It primarily addresses dynamic web content and web applications developed with Ajax and similar technologies.\r\n\r\nWhile web developers play a key role in accessibility by following WCAG, others also have responsibility for making the Web accessible, especially those who develop the software used to create websites and web “content”. These are called “authoring tools”. The WAI’s Authoring Tool Accessibility Guidelines (ATAG) defines how these tools should support accessibility. When authoring tools such as HTML editors and content management systems (CMS) support accessibility, it allows developers to create accessible websites more efficiently.\r\n\r\nOther types of authoring tools include blogs, wikis, social networking websites, and such. It is important that these tools are accessible so that people with disabilities, and people in underserved communities, can contribute to information and discussions online. As you know in Malaysia, blogs can be very powerful vehicles for communication.\r\n\r\nFinally, the web browsers, media players, and other (what we call) “user agents” also need to support accessibility. The WAI’s User Agent Accessibility Guidelines (UAAG) defines what this software needs to do to for accessibility.\r\n\r\nThe W3C encourages adoption of its Web standards, including:\r\n\r\n    UAAG for browsers and other user agents\r\n    ATAG for all types of authoring tools\r\n    WCAG for websites [and web applications]\r\n    WAI-ARIA [for advanced web interfaces] that crosses over several of these\r\n\r\nThese guidelines provide stable standards that governments and organizations can adopt. The supporting material provides “how to” examples for web developers and designers.\r\n\r\nFor more information about the accessibility guidelines and other web accessibility resources, please see the WAI home page at www.w3.org/WAI\r\n\r\nFollowing these standards has additional benefits as well. For example, many websites —including many Malaysian websites— use images for text instead of using real text and styling it with CSS (Cascading Style Sheets). If the developers and designers used real text, then the websites would be more accessible, they would use less bandwidth, and they would be better optimized for search engines. One of the many resources on the WAI website is a document on the business case for web accessibility that explains some of these issues. It discusses the social, technical, financial, and legal & policy factors of web accessibility.\r\n\r\nTim Berners-Lee, who is the inventor of the World Wide Web and the director of the W3C, has said,\r\n\r\n    The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.\r\n\r\nNot only is connection to the Internet important, it is also vital that websites and web software are accessible to people with disabilities and everyone, including older users with accessibility needs due to aging, people using mobile devices to access the Web, and many others.\r\n\r\nI thank you for your efforts to make the Web accessible, so that all will have the ability to receive information, as well as provide information and interact with society through the Web.\r\n\r\nThank you.\r\n\r\nMaking the Web Accessible to People with Disabilities\r\nTranscript at www.w3.org/WAI/presentations\r\n"
  }}
/>
```

UCM3 - Active Video - modal DAM video source with temporal fragmentation (total duration is 30s, start time is 20s, end time is 25s, segment duration is 5s)
```playground
<FCA.ActiveVideo
  activeVideo = {{
    "compId":"activeVideo-temporal-modal-2",
    "videoType": "external",
    "target": "modal",
    "mediaModal": {
        "mediaType": "activeVideo",
        "mediaContent": {
          "videoSrc": "/assets/video/chrysler-social.mp4",
          "mediaSrc": "internal",
          "videoTrackingId": "video4"
        },
        "mediaDescriptionBar": {
          "mediaTitle": "title1",
          "mediaDescription": "description1",
          "lpos": "",
          "downloadLid":"",
          "downloadIcon":"download"
        }
    },
    "stillImage": {
      "xs": ["//placehold.it/320x240", "//placehold.it/320x240 2x"],
      "sm": ["//placehold.it/320x240", "//placehold.it/320x240 2x"],
      "md": ["//placehold.it/768x576", "//placehold.it/768x576 2x"],
      "lg": ["//placehold.it/1280x720", "//placehold.it/1280x720 2x"],
      "alt": "Placeholder Images"
    },
    "videoLayout": "standard",
    "transformOriginX": 100,
    "transformOriginY": 100,
    "overlayTheme": "light",
    "playIcon": "play",
    "duration": "0.30",
    "preTitleStyle": "gcss-typography-utility-heading-6",
    "title": "An Obsessive/Compulsive Vampire",
    "titleStyle": "",
    "subTitle": "(this video plays in a modal window)",
    "subTitleStyle": "gcss-typography-utility-heading-6",
    "lpos": "video-lpos",
    "lid": "video-lid",
    "linktype": "video-linktype",
    "disclaimer": "This is the disclaimer"
  }}
  segment={{
    "startTime": "00:00:20",
    "endTime": "00:00:25",
    "segmentDuration": 5
  }}
/>
```

UCM3 - Active Video - inline DAM instance 1
```playground
<FCA.ActiveVideo
  activeVideo = {{
    "compId":"activeVideo-1",
    "videoType": "DAM",
    "target": "inline",
    "videoSrc": "/assets/video/video2.mp4",
    "stillImage": {
      "xs": ["//placehold.it/320x240", "//placehold.it/320x240 2x"],
      "sm": ["//placehold.it/320x240", "//placehold.it/320x240 2x"],
      "md": ["//placehold.it/768x576", "//placehold.it/768x576 2x"],
      "lg": ["//placehold.it/1280x720", "//placehold.it/1280x720 2x"],
      "alt": "Placeholder Images"
    },
    "videoLayout": "standard",
    "transformOriginX": 100,
    "transformOriginY": 100,
    "isOverlay": true,
    "overlayTheme": "dark",
    "playIcon": "play",
    "duration": "4.04",
    "preTitle": "Pre title",
    "preTitleStyle": "gcss-typography-utility-heading-5",
    "title": "Title here",
    "titleStyle": "gcss-typography-brand-heading-1",
    "subTitle": "sub title here",
    "subTitleStyle": "gcss-typography-label-5",
    "lpos": "video-lpos",
    "lid": "video-lid",
    "linktype": "video-linktype",
    "videoTrackingId": "video1",
    "disclaimer": "This is the disclaimer"
  }}
/>
```

UCM3 - Active Video - inline DAM instance 2
```playground
<FCA.ActiveVideo
  activeVideo = {{
    "compId":"activeVideo-2",
    "videoType": "DAM",
    "target": "inline",
    "videoSrc": "/assets/video/video2.mp4",
    "stillImage": {
      "xs": ["//placehold.it/320x240", "//placehold.it/320x240 2x"],
      "sm": ["//placehold.it/320x240", "//placehold.it/320x240 2x"],
      "md": ["//placehold.it/768x576", "//placehold.it/768x576 2x"],
      "lg": ["//placehold.it/1280x720", "//placehold.it/1280x720 2x"],
      "alt": "Placeholder Images"
    },
    "videoLayout": "standard",
    "transformOriginX": 100,
    "transformOriginY": 100,
    "overlayTheme": "light",
    "playIcon": "play",
    "duration": "4.04",
    "preTitle": "Pre title",
    "preTitleStyle": "gcss-typography-utility-heading-6",
    "title": "Title here",
    "titleStyle": "",
    "subTitle": "sub title here",
    "subTitleStyle": "gcss-typography-utility-heading-6",
    "lpos": "video-lpos",
    "lid": "video-lid",
    "linktype": "video-linktype",
    "videoTrackingId": "video2",
    "disclaimer": "This is the disclaimer"
  }}
/>
```

UCM3 - Active Video - inline external video source
```playground
<FCA.ActiveVideo
  autoPlay={false}
  activeVideo = {{
    "compId":"activeVideo-3",
    "videoType": "external",
    "target": "inline",
    "videoSrc": "0t-pV9rOcPE", /* "Lj-bj6Inqdg", */
    "stillImage": {
      "xs": ["//placehold.it/320x240", "//placehold.it/320x240 2x"],
      "sm": ["//placehold.it/320x240", "//placehold.it/320x240 2x"],
      "md": ["//placehold.it/768x576", "//placehold.it/768x576 2x"],
      "lg": ["//placehold.it/1280x720", "//placehold.it/1280x720 2x"],
      "alt": "Placeholder Images"
    },
    "videoLayout": "standard",
    "transformOriginX": 100,
    "transformOriginY": 100,
    "overlayTheme": "light",
    "playIcon": "play",
    "duration": "4.04",
    "preTitle": "Pre title",
    "preTitleStyle": "gcss-typography-utility-heading-6",
    "title": "Title here",
    "titleStyle": "",
    "subTitle": "sub title here",
    "subTitleStyle": "gcss-typography-utility-heading-6",
    "lpos": "video-lpos",
    "lid": "video-lid",
    "linktype": "video-linktype",
    "disclaimer": "This is the disclaimer"
  }}
/>
```

UCM3 - Active Video - modal video source
```playground
<FCA.ActiveVideo
  activeVideo = {{
    "compId":"activeVideo-modal-1",
    "videoType": "external",
    "target": "modal",
    "mediaModal": {
        "mediaType": "activeVideo",
        "mediaContent": {
          "videoSrc": "MGuKhcnrqGA",
          "mediaSrc": "external",
          "videoTrackingId": "video4"
        },
        "mediaDescriptionBar": {
          "mediaTitle": "title1",
          "mediaDescription": "description1",
          "lpos": "",
          "downloadLid":"",
          "downloadIcon":"download"
        }
    },
    "stillImage": {
      "xs": ["//placehold.it/320x240", "//placehold.it/320x240 2x"],
      "sm": ["//placehold.it/320x240", "//placehold.it/320x240 2x"],
      "md": ["//placehold.it/768x576", "//placehold.it/768x576 2x"],
      "lg": ["//placehold.it/1280x720", "//placehold.it/1280x720 2x"],
      "alt": "Placeholder Images"
    },
    "videoLayout": "standard",
    "transformOriginX": 100,
    "transformOriginY": 100,
    "overlayTheme": "light",
    "playIcon": "play",
    "duration": "4.04",
    "preTitle": "Pre title",
    "preTitleStyle": "gcss-typography-utility-heading-6",
    "title": "Title here",
    "titleStyle": "",
    "subTitle": "sub title here",
    "subTitleStyle": "gcss-typography-utility-heading-6",
    "lpos": "video-lpos",
    "lid": "video-lid",
    "linktype": "video-linktype",
    "disclaimer": "This is the disclaimer"
  }}
/>
```

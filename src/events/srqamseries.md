---
layout: page-nav.liquid
title: CØASTLiNE Presents - SRQ Am Series and Music Festival
description: The inaugural SRQ Am Series and Music Festival is an event to showcase the unique blend of sports and music culture we love so much here on Florida’s best coast.
tags: event
posterImg: srqamseries_logo-md.png
event_title: SRQ Am Series and Music Festival
event_website: http://coastline941.com/events/srqamseries/
location_name: City of North Port Skate Park
location_street: 5651 North Port Boulevard
location_city: North Port
location_state: Florida 
location_zip: 34287
location_url: https://www.google.com/maps/place/North+Port+Skatepark/@27.0471319,-82.237207,17z/data=!3m1!4b1!4m5!3m4!1s0x88c354a22112d131:0x614bdc6898f80b16!8m2!3d27.0471319!4d-82.2350183
date: 2019-03-30
startDate: 2019-03-30 10:00AM
endDate: 2019-03-30 8:000PM
url_insta: 
url_fb:
url_twitter:
url_youtube: 
---
<style>
h1, h2, h3, h4, h5, h6 {
  font-family: 'aileronultralight', sans-serif;
}

.center-cropped {
  height: 135px;
  background-position: center center;
  background-repeat: no-repeat;
}

.hero-container{
  padding-top: 80px;
  width: 100%;
  text-align: center;
  overflow: hidden;
}
.hero-img{
  height: 100vh;
  position: relative;
  left: 50%;
  transform: translate(-50%,0);
}

#schedule li {
    list-style: none;
}

#subtitle {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0;
}

#subtitle_location {
  font-size: 2rem;
  margin-bottom: 3rem; 
}

.minicon {
    margin-right: -4px;
    margin-left: -7px;
    width: 1.5em;
}
</style>

<script type='application/ld+json'> 
{
  "@context": "http://www.schema.org",
  "@type": "Event",
  "name": "{{event_title}}",
  "url": "{{event_website}}",
  "description": "{{description}}",
  "startDate": "{{startDate}}",
  "endDate": "{{endDate}}",
  "location": {
    "@type": "Place",
    "name": "{{location_name}}",
    "sameAs": "http://www.cityofnorthport.com/government/city-services/parks-recreation/parks/skate-park",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "{{location_street}}",
      "addressLocality": "{{location_city}}",
      "addressRegion": "{{location_state}}",
      "postalCode": "{{location_zip}}",
      "addressCountry": "USA"
    }
  },
  "offers": [
      {
        "@type": "Offer",
        "description": "General Admission",
        "url": "https://coastline-band-llc.weebly.com/product/pre-sale-general-admission-tickets/1",
        "price": "$4.00"
      },
      {
        "@type": "Offer",
        "description": "Participant Registration",
        "url": "https://coastline941.com/events/srqamseries_registration/",
        "price": "$12.00"
      }
  ]
}
</script>

<div class="hero-container">
<img src="{{ '/img/srqamseries-hero.jpg' | url }}" class="hero-img d-block" alt="SRQ Am Series logo">
</div>

<div id="content-wrapper" style="padding-left: 1em; padding-right: 1em;">
<div>


<!--<div class="jumbotron" style="background-image: url({{ '/img/srqamseries-hero.jpg' | url }}); background-size: 100%;">-->
<!--   <div class="container for-about">-->
<!--   <h1>#SRQAmFest</h1>-->
<!--   </div>-->
<!--</div>-->

<!--<p id="subtitle" class="aileronultralight text-center">brought to you by Office Outfitters</p>-->
<p id="subtitle_location" class="aileronultralight text-center">March 30, 2019 - City of North Port Skate Park</p>

#### Get Spring started with an all-day Skate and BMX Competition and full line up Music Festival.

{{ description }}

<div class="row">
<div class="col-md">

## Registration and Tickets

<div class="container-fluid">
<div class="row">
<div class="col-md">

Participant Registration:<br>
$12 in advance - $15 at the door

</div>
<div class="col-md-5">
<a class="btn btn-primary btn-lg btn-block" href="{{ '/events/srqamseries_registration/' | url }}">Registration</a>
</div>
</div>

<div class="row">
<div class="col-md">

General Admission:<br>
$4 in advance - $5 at the door

</div>
<div class="col-md-5">
<a class="btn btn-primary btn-lg btn-block" href="https://coastline-band-llc.weebly.com/product/pre-sale-general-admission-tickets/1" target="_blank">Spectator</a> 
</div>
</div>
<div class="row">
<div class="ml-3">

**Ages 10 and under get in Free with accompanying adult!**

</div>

</div>

</div>

**PLEASE NOTE:** All General Admission purchases are final and can only be refunded within 15 days of the event. 

**Participants:** If for any reason you cannot attend, please make sure to give full notice within 15 days to receive a refund and so we can try to fill your slot with another participant.

## Thanks!
This event is made possible through the efforts of our uncommonly talented <a href="{{ '/events/srqamseries_staff/' | url }}">staff</a> and through the generous support of our <a href="{{ '/events/srqamseries_sponsors/' | url }}">sponsors</a>.

</div>
<div class="col-md">

## #SocialMedia
Make sure to use the hashtag **#SRQAmFest** so we can check out your posts from the event.

<p>Like, share, and follow the event on <a class="text-nowrap" href="https://www.facebook.com/events/743260372720834/" target="_blank"><i class="minicon" data-feather="facebook"></i>acebook</a> and stay tuned to the <a href="https://www.facebook.com/SrqAmFest/" target="_blank">SRQ Am Fest</a> page for updates.</p>

## Contact Us
Are you interested in sponsoring the event or just looking to get more information? Please reach out to us anytime on <a class="text-nowrap" href="https://www.facebook.com/events/743260372720834/" target="_blank"><i class="minicon" data-feather="facebook"></i>acebook</a> or email us at: <a href="mailto:{{ 'staff@srqamfest.com' | enunicode }}">{{ 'staff@srqamfest.com' | enunicode }}</a>

## Band Lineup
Check out the [SRQ Am Lineup]({{ '/events/srqamseries_bands/' | url }}) and let us know if your band should be on the list!

{% include srqamseries_registration.liquid %}

</div>
<div id="schedule" class="col-xl">

## Schedule

We will try to stay on schedule as much as possible, but of course these times are all approximate. Start times can vary based on the number of participants, so make sure to arrive early for your group.

* **8am-11am** - Registration / Open Skate Warmups
* **11:00am** - Comp Starts -- Beginner Skate/Scoot
* **11:30am** - The Rock Box Student Band Start
* **12:00pm** - Intermediate Skate/Scoot
* **12:30pm** - Lesa Silvermore & The Growlers Starts
* **1:00pm** - Advanced Skate/Scoot
* **1:30pm** - Neverless Starts
* **2:00pm** - Beginner BMX
* **2:30pm** - Monument Beach Starts
* **3:00pm** - Intermediate BMX
* **3:30pm** - FMP Starts
* **4:00pm** - Advanced BMX
* **4:30pm** - Bargain Bin Heroes Starts
* **5:00pm** - Pro Skateboard and BMX Show Off Session
* **5:30pm** - Skateboard, BMX and Best of the Day Awards Ceremony
* **6:00pm** - CØASTLINE Starts
* **6:45pm** - Offset Era Starts
* **7:30pm** - Perfect Sequence Starts
* **8:15pm** - Two Inch Voices Starts

</div>
</div>

<div class="row text-md-center">
<div class="col">
<h2>Location</h2>
</div>
</div>
<div class="row text-md-center">
<div class="col">
<a href="{{ location_url }}" target="_blank">
{{ location_name }}<br>
{{ location_street }}<br>
{{ location_city }}, {{ location_state }} {{ location_zip }}<br>
</a>

*Parking is available off Greenwood Avenue across from the Skate Park.*

</div>
</div>
<div class="row text-center">
<div class="col">
<a href="{{ location_url }}" target="_blank">

<div class="center-cropped" 
     style="background-image: url('{{ '/img/map-npsp.png' | url }}');">
</div>

</a>

</div> <!-- col -->

</div> <!-- row -->

</div>  <!-- container -->


</div>

</div>

</div>

</div>
</div>

# REGEX  EXTRACTION  FORMATIVE. 
This particurlar project is all about extracting file using java script or python. but here i used javascript for the project.
## TABLE OF CONTENTS. 
- DESCRIPTION 
- SETUP INSTRUCTION
- FEATURES 
- AUTHOR 

### DESCRIPTION
 This is desgned in such a way that users can process a text file (index.txt) and be able to extract a specfic data  using  regular expressions. after running the script the user can select an option either a,b,c,d,e,f.
## Features ##
 - Email addresses
 - Urls
 - Phone numbers 
 - Hashtags
 - time formats (12hrs/24hrs)

 **E  mail Extraction**: only valid emails are extract from the text. invalid email for example chiagbanweghimosespeter@gmail..com won't be extracted.

 **URLS** : it extracts only valid urls  with HTTPS and HTTP LINKS

 **Phone number**: it extract  phone numbers with () and once without brackets.


**Hashtag Extraction**: it extract #tags files like #moses #opeter#klinpikk#second formative 


**Time Format Extraction:**  this extracts file both 12 hours and 4 hours time zone format.

**Exit:** This option closes the extraction.

## required app ##
to run the script  you must have the **Node.js** installed in your device.


## Setup Instructions ##
- first you need to clone the git hub repository(alu_regex-data-extraction-chiagbanweghi101
).

- Installing of node.js 
- creating an input file (index.txt)


## **Pattern Used** ##

- Email Rgex:const emailRegex = /[a-zA-Z0-9](?:[a-zA-Z0-9._%+-]*[a-zA-Z0-9])?@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}/g;


- URL REGEX:  
const urlRegex = /https?:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(\/[a-zA-Z0-9-.~])(\?[a-zA-Z0-9-.~=&])?(#[a-zA-Z0-9-_.~])?/g;


- PHONE NUMBER REGEX:const phoneRegex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;


- HASHTAG REGEX:const hashtagRegex = /#\w+/g;

- TIME REGEX: const timeRegex = /\b(1[0-2]|0?[1-9]):[0-5][0-9]\s*(AM|PM)\b|\b([01]?[0-9]|2[0-3]):[0-5][0-9]\b/g;





**chiagbanweghi moses peter**
# M.Keys - Mechanical Keyboards Application
 
Access the live demo website [here](https://mkeys-tgc18-proj2.netlify.app/).


## **Overview**

The main purpose of this website is to build a crowd sharing platform of mechanical keyboards for users to share their creations and gather information from others to build their own in the future.

### **Target Audience**

The users refer to people who are interested in mechanical keyboards, especially those who are beginners in this area.

Through the website, users should be able to gain key information necessary to build their own from scratch, regardless if they decided to use different components from different listings.

#### **User Need** 
To gain basic information from other mechanical keyboards to build their own mechanical keyboards.

#### **User Goal** 
To search through existing listings to find mechanical keyboards that they like. From the listing, they can find basic information and if they need more information, they can comment on the listing and wait for the creator to reply.

#### **User Pain Points** 
Reddit has a common thread for mechanical keyboard postings but the information is not standardised and often does not indicate much information. Users will have to comment and get replies from the creator to get the basic information needed. 

Another platform commonly used is geekhack. Although it can be very detailed, but their search function is not user-friendly for beginners.

### **Organisation's Goals**

Organisation wants to create this crowdsharing platform and possibly make this a centralised informational site for mechanical keyboard lovers. With adequate popularity, the organisation hopes to be able to get advertisement offers and other monetisation ideas. 

The organisation can also use the information from the database to see what are the more popular keyboard and keycap brands and model. This may help with getting advertisement offers and posssibly adding a groupbuy function where a commission fee can be earned for faciliating


## **UIUX**

### **Strategy**

#### **Mechanical Keyboard Users** 

| User Stories | Acceptance Criteria | 
| ----------- | ----------- |
|  I want to know what mechanical keyboards have the appearance of what I like | Based on the user search, they can scroll through the listings which have pictures to get ideas.|
| I want to know what components (keyboard, keycap, switches) are used in the mechanical keyboard listing | Based on the compulsory information required to be keyed in to post a listing, users can click into each listing to see these information|
| I want to know other information that are not compulsory to create the listing | The user can comment on the listing to interact with the creator and other people who have commented. |

### **Scope**


#### **Functional Requirements**

1. Search Function to filter database listings according to user input based on 4 compulsory and 1 optional field
2. Create function for new listing
3. Edit and Delete function on each listing 
4. Create function for new comment in each listing
5. Edit and Delete function on each comment in each listing
6. Verification of email function to allow edit and delete of listing by the user who initially created it
7. Verification of email function to allow edit of comment in each listing by the user who initially created it. (verification for delete has not been done)

#### **Non-Functional Requirements**
Mobile Responsiveness

### **Structure**

![Structure](src/pages/css/structure.png)

### **Skeleton**

![Skeleton for listings page](src/pages/css/readme/listings.png)
![Skeleton for each-listing page](src/pages/css/readme/each-listing.png)
![Skeleton for create / edit page](src/pages/css/readme/create-edit.png)

### **Surface**
1. Colours
    - Used colours that are from the logo or similar to the logo
    - ![3b3b6b](readme/color/3b3b6b.png) ![ccaf60](readme/color/ccaf60.png) ![e8cd84](readme/color/e8cd84.png) ![f1f1f1](readme/color/f1f1f1.png) ![efefef](readme/color/efefef.png)![d24847](readme/color/d24847.png)

2. Fonts
   - Inder

3. Icons
   - Used for edit, delete and save functions.


## **Testing of Website**
Test Cases can be found [here](https://docs.google.com/spreadsheets/d/1pHJX0epwqMZXZ6begHmw0Brv4i67bn3sBsKAMFGcJGA/edit?usp=sharing)


### **Possible Enhancements**
1. Add user verification before comment can be deleted
2. Styling of website can be done better
3. Add a successfully added message after moving to the listings page
4. Add a page where it can show all the listings posted by the user accessing the website
5. Add a button for the user to save the listings they like and have a page where they can view all the listings that have saved.


## **Technologies and Other Sources Used**

### **_Technologies_**
1. [GoogleFonts](https://fonts.google.com/) for CSS styling
2. [Axios](https://cdnjs.com/libraries/axios) for API requests
3. [React Bootstrap](https://react-bootstrap.github.io/) for HTML, CSS Styling
4. [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/) for HTML, CSS Styling
    - Buttons, Table, Dropdown menu, Radio Buttons, Checkboxes
    - Input group (Text, Email)
5. [Gitpod] (https://gitpod.io/workspaces) for version control
6. [Github] (https://github.com/) for code editing and respository
7. [Netlify] (https://www.netlify.com/) for frontend React deployment
8. [Heroku] (https://www.heroku.com/) for backend Express deployment
9. [MongoDB] (https://www.mongodb.com/) for accessing database on MongoDB using their API
### **_Data Sources_**

1. Base data for Mechanical Keyboard Postings loaded in database
   - [Reddit](https://www.reddit.com/r/MechanicalKeyboards/)


### **_Image Sources_**

|[Flaticon](https://www.flaticon.com/) - Icon made by | Image name in gitpod |
| ---------------- | ----------- |
| Anggara | editLogo.png|
| Pixel perfect  | deleteLogo.png|
| inkubators | closeLogo.png|
| kliwir art | saveLogo.png|

|Image Purpose | Image name in gitpod |
| ---------------- | ----------- |
| Landing Page | [Background.jpeg](https://images.unsplash.com/photo-1595225386386-79c3543adbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80)|


### **_Other Sources_**
1. Lecturer (Paul Chor) for his slides, tutorials and notes
2. Teaching Assistants (Ace Liang, Razia Wong) for their guidance
3. [StackOverFlow](https://stackoverflow.com/) for guidance
4. [W3schools](https://www.w3schools.com/) for HTML, CSS, Javascript guidance

# SWAP SHOP 

## Description
Duration: 2 Week Sprint

## Screen Shot
![alt text](/images/Profile.jpg)
![alt text](/images/TheShop.jpg)
![alt text](/images/MySwap1.jpg)
![alt text](/images/MySwap2.jpg)

## Installation
1. Create a database named swapshop,
2. The queries in the tables.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an npm install
4. Run npm run server in your terminal
5. Run npm run client in your terminal
6. The npm run client command will open up a new browser tab for you!

## Usage
1. Create account/login: 
As a new user, register by filling out the username, password, first name, last name, and email fields on the register page. On the click of the "register" button, users will be brought to their profile page. If you already have a Swap Shop account, you can login using your username and password which will bring you to your profile page. 

2. Upload items to your profile:
To upload items to your profile, click the "add item" button. This will take you to the add item page which will allow you to fill out the item, image, and description input for the item you want to add. Once you are ready to add the item, click the "add item" button. If you do NOT want to add the item, click the "cancel" button which will take you back to your profile page. 

3. Edit an item:
To edit an item on your profile, click the "edit" button associated with the item you want to edit. This will take you to the edit item page which will allow you to update the item, image, and description input for the item you want to edit. Once you are finished editing the item, click the "save" button. If you do NOT want to edit the item, click the "cancel" button which will take you back to your profile page. 

4. Delete an item: 
To delete an item, click the "delete" button associated with the item you want to delete.

5. Shop: 
To shop for items, navigate to the "Shop" page using the bottom navigation bar. Here, you will see all the items that users have uploaded including your own. Items will have the owner's username as well as the item name, image, and description displayed. When you are ready to swap for that item, click the "swap" button associated with the item you want to swap FOR. 

6. Swap: 
Once you have clicked the "swap" button, you will be brought to the swap page. Here, the item you have chose to swap FOR will populate on the page, as well as all the items from your profile that you can swap WITH. From here, you can select what item you would like to swap WITH by clicking the "select" button associated with that item. When your item is selected, click the "confirm" button which will send the swap offer. You will then receive a notification that your swap was sent. If you do not want to swap FOR the item you selected, click the "cancel" button which will take you back to the shop page. 

7. My Swaps: 
To view any incoming swap offers, navigate to the "My Swaps" page using the bottom navigation bar. Here, you will see a list of all the incoming offers you have received for your items. To accept an offer, click the "accept" button. To decline an offer, click the "decline" button. 

8. Accepted Offers: 
Once a swap is accepted, the items will be displayed on the user profiles that they now belong to. To view your profile, navigate to the "Profile" page using the bottom navigation bar. From here, you can continue to swap the item, or you can delete the item from your profile page. 

## Built With
Node
Express
React
React-Redux
Redux-Saga
Postgresql
Sweet Alert 2
MUI

## Acknowledgement
Thanks to Prime Digital Academy who equipped and helped me to make this application a reality. Thanks to the butler cohort, instructor, friends and family for all the support and encouragement. 

## Support
If you have suggestions or issues, please find me at https://github.com/anissacrawford


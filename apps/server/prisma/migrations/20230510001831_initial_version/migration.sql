-- CreateEnum
CREATE TYPE "EnumIndividualGender" AS ENUM ('Male', 'Female', 'Na');

-- CreateEnum
CREATE TYPE "EnumScalarClassification" AS ENUM ('Constant', 'Variable');

-- CreateEnum
CREATE TYPE "EnumPaymentTermCollectedBy" AS ENUM ('SSN', 'BSN', 'CSN');

-- CreateEnum
CREATE TYPE "EnumPaymentTermLifecycleProcessing" AS ENUM ('PreOrder', 'PreFulfillment', 'OnFulfillment', 'PostFulfillment');

-- CreateEnum
CREATE TYPE "EnumPaymentTermStatus" AS ENUM ('Processed', 'Collectable');

-- CreateEnum
CREATE TYPE "EnumRatingEntity" AS ENUM ('Item', 'Order', 'Fulfillment', 'Seller', 'Courier', 'Support');

-- CreateEnum
CREATE TYPE "EnumTrackingStatus" AS ENUM ('Active', 'Inactive');

-- CreateEnum
CREATE TYPE "EnumCancellationCancelledBy" AS ENUM ('Seller', 'Buyer', 'Courier');

-- CreateEnum
CREATE TYPE "EnumFulfillmentSpecificationFulfillmentModes" AS ENUM ('PickUp', 'Delivery', 'DineIn', 'TakeOut', 'DriveThru');

-- CreateEnum
CREATE TYPE "EnumFulfillmentSpecificationStatus" AS ENUM ('NewOrder', 'Confirmed', 'PickedUp', 'Canceled', 'Fulfilled', 'Prepared', 'Rejected', 'CourierRequested', 'CourierAssigned', 'CourierPickedUp', 'CourierCompleted', 'CourierCanceled', 'CourierArrivedAtPickup');

-- CreateEnum
CREATE TYPE "EnumMenuItemFulfillmentModes" AS ENUM ('Delivery', 'PickUp', 'DineIn', 'TakeOut', 'DriveThru');

-- CreateEnum
CREATE TYPE "EnumMenuFulfillmentModes" AS ENUM ('PickUp', 'Delivery', 'DineIn', 'TakeOut', 'DriveThru');

-- CreateEnum
CREATE TYPE "EnumBazaarFulfillmentModes" AS ENUM ('PickUp', 'Delivery', 'DineIn', 'TakeOut', 'DriveThru');

-- CreateEnum
CREATE TYPE "EnumOrderStatus" AS ENUM ('Active', 'Complete', 'Cancelled');

-- CreateEnum
CREATE TYPE "EnumNodeIndustryCode" AS ENUM ('LastMileDelivery', 'Rideshare');

-- CreateEnum
CREATE TYPE "EnumNodeOperatorType" AS ENUM ('Uno', 'Bsn', 'Ssn', 'Csn');

-- CreateEnum
CREATE TYPE "EnumHourIntervalDays" AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

-- CreateTable
CREATE TABLE "User" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "roles" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "height" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "individualsId" TEXT,
    "menuItemId" TEXT,
    "ratingId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,
    "width" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MediaFile" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "menuItemsId" TEXT,
    "mimeType" TEXT NOT NULL,
    "ratingId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "MediaFile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Individual" (
    "contactId" TEXT,
    "couriersId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateOfBirth" TIMESTAMP(3),
    "firstName" TEXT NOT NULL,
    "gender" "EnumIndividualGender",
    "id" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "middleName" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,
    "usersId" TEXT,

    CONSTRAINT "Individual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentSource" (
    "addressCity" TEXT NOT NULL,
    "addressCountry" TEXT NOT NULL,
    "addressLine_1" TEXT NOT NULL,
    "addressLine_2" TEXT NOT NULL,
    "addressState" TEXT NOT NULL,
    "addressZip" TEXT NOT NULL,
    "cardNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "currencyCode" TEXT NOT NULL,
    "cvc" INTEGER NOT NULL,
    "expirationMonth" INTEGER NOT NULL,
    "expirationYear" INTEGER NOT NULL,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "usersId" TEXT,

    CONSTRAINT "PaymentSource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scalar" (
    "classification" "EnumScalarClassification" NOT NULL,
    "computedValue" DOUBLE PRECISION,
    "estimatedValue" DOUBLE PRECISION,
    "id" TEXT NOT NULL,
    "range" JSONB,
    "unit" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Scalar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "address" TEXT NOT NULL,
    "areaCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "coordinate" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "mapUrl" TEXT,
    "nodeId" INTEGER,
    "organizationsId" TEXT,
    "radius" INTEGER,
    "sellerId" TEXT,
    "state" TEXT NOT NULL,
    "trackingsId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "waypointsId" TEXT,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seller" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "holidays" JSONB,
    "id" TEXT NOT NULL,
    "isRateable" BOOLEAN NOT NULL,
    "password" TEXT,
    "rating" DOUBLE PRECISION,
    "searchId" TEXT,
    "sellerClassificationId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "usersId" TEXT NOT NULL,

    CONSTRAINT "Seller_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentTerm" (
    "bazaarId" TEXT,
    "collectedBy" "EnumPaymentTermCollectedBy" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "lifecycleProcessing" "EnumPaymentTermLifecycleProcessing" NOT NULL,
    "orderId" TEXT,
    "paymentAmount" INTEGER,
    "paymentSourceId" TEXT,
    "searchId" TEXT,
    "sellerId" TEXT,
    "status" "EnumPaymentTermStatus" NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PaymentTerm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Promotion" (
    "amount" DOUBLE PRECISION,
    "bazaarId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expirationDate" TIMESTAMP(3),
    "id" TEXT NOT NULL,
    "maximumPurchase" DOUBLE PRECISION,
    "minimumPurchase" DOUBLE PRECISION NOT NULL,
    "name" TEXT NOT NULL,
    "percentage" DOUBLE PRECISION,
    "searchId" TEXT,
    "sellerId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Promotion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModifierGroup" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "maximumPerModifierSelectionQuantity" INTEGER NOT NULL,
    "maximumSelections" INTEGER NOT NULL,
    "menuItemIDs" JSONB NOT NULL,
    "minimumSelections" INTEGER NOT NULL,
    "sellerModifierGroupsId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ModifierGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemQuantity" (
    "allocatedCount" INTEGER NOT NULL,
    "allocatedMeasureId" TEXT NOT NULL,
    "availableCount" INTEGER NOT NULL,
    "availableMeasureId" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "maximumPurchasableCount" INTEGER NOT NULL,
    "maximumPurchasableMeasureId" TEXT NOT NULL,
    "menuItemId" TEXT,
    "minimumPurchasableCount" INTEGER NOT NULL,
    "minimumPurchasableMeasureId" TEXT,
    "selectedCount" INTEGER,
    "selectedMeasureId" TEXT,

    CONSTRAINT "ItemQuantity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "capacity" INTEGER,
    "category" TEXT,
    "code" TEXT,
    "color" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "make" TEXT,
    "model" TEXT,
    "registration" TEXT,
    "size" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "volume" TEXT,
    "wheelsCount" INTEGER,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "courierId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "entity" "EnumRatingEntity" NOT NULL,
    "entityId" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "sellerId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tracking" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fulfillmentSpecificationsId" TEXT,
    "id" TEXT NOT NULL,
    "status" "EnumTrackingStatus" NOT NULL,
    "trackingUrl" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tracking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Billing" (
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "taxId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Billing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Courier" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "rating" DOUBLE PRECISION,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "usersId" TEXT NOT NULL,

    CONSTRAINT "Courier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Waypoint" (
    "contactId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fulfillmentSpecificationId" TEXT,
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "waypointCode" TEXT NOT NULL,

    CONSTRAINT "Waypoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cancellation" (
    "cancelledBy" "EnumCancellationCancelledBy" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "isReasonRequired" BOOLEAN NOT NULL,
    "orderId" TEXT,
    "reason" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cancellation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quote" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "currencyCode" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "timeToLive" INTEGER NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Quote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FulfillmentSpecification" (
    "buyerId" TEXT NOT NULL,
    "contactId" TEXT NOT NULL,
    "courierId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fulfillmentModes" "EnumFulfillmentSpecificationFulfillmentModes" NOT NULL,
    "id" TEXT NOT NULL,
    "isRateable" BOOLEAN NOT NULL,
    "rating" DOUBLE PRECISION,
    "sellerId" TEXT NOT NULL,
    "status" "EnumFulfillmentSpecificationStatus",
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT NOT NULL,
    "vehicleId" TEXT,

    CONSTRAINT "FulfillmentSpecification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenuItem" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "currencyCode" TEXT NOT NULL,
    "fulfillmentModes" "EnumMenuItemFulfillmentModes"[],
    "id" TEXT NOT NULL,
    "isRateable" BOOLEAN NOT NULL,
    "locationIDs" JSONB,
    "modifierGroupIDs" JSONB,
    "paymentModes" JSONB NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "rating" DOUBLE PRECISION,
    "sellersId" TEXT,
    "timeToLive" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MenuItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "menuItemIDs" JSONB NOT NULL,
    "sellerId" TEXT,
    "timeToLive" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Menu" (
    "categoryIDs" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fulfillmentModes" "EnumMenuFulfillmentModes"[],
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sellerId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bazaar" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fulfillmentModes" "EnumBazaarFulfillmentModes"[],
    "id" TEXT NOT NULL,
    "timeToLive" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bazaar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Support" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Support_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "billingId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fulfillmentSpecificationId" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "referenceOrderIds" TEXT,
    "status" "EnumOrderStatus" NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Node" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hostUrl" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "industryCode" "EnumNodeIndustryCode" NOT NULL,
    "operatorType" "EnumNodeOperatorType" NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Node_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Condition" (
    "bsnId" TEXT NOT NULL,
    "bsnUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "csnId" TEXT,
    "csnUrl" TEXT,
    "id" TEXT NOT NULL,
    "industryCode" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "publicKey" TEXT NOT NULL,
    "ssnId" TEXT NOT NULL,
    "ssnUrl" TEXT NOT NULL,
    "timeToLive" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Condition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Search" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fulfillmentSpecificationId" TEXT,
    "id" TEXT NOT NULL,
    "menuItemsId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Search_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HourInterval" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "days" "EnumHourIntervalDays"[],
    "fromHour" INTEGER NOT NULL,
    "fromMinute" INTEGER NOT NULL,
    "id" TEXT NOT NULL,
    "menusId" TEXT,
    "toHour" INTEGER NOT NULL,
    "toMinute" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HourInterval_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_IndividualToWaypoint" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ContactToOrganization" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_LocationToPromotion" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CourierToOrganization" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_menuItemsSelectedModifiers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MenuItemToOrder" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MenuItemToOrganization" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MenuItemToQuote" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BazaarToSeller" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrderToPromotion" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Individual_couriersId_key" ON "Individual"("couriersId");

-- CreateIndex
CREATE UNIQUE INDEX "Individual_usersId_key" ON "Individual"("usersId");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentSource_currencyCode_key" ON "PaymentSource"("currencyCode");

-- CreateIndex
CREATE UNIQUE INDEX "Location_trackingsId_key" ON "Location"("trackingsId");

-- CreateIndex
CREATE UNIQUE INDEX "Location_waypointsId_key" ON "Location"("waypointsId");

-- CreateIndex
CREATE UNIQUE INDEX "Seller_usersId_key" ON "Seller"("usersId");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentTerm_bazaarId_key" ON "PaymentTerm"("bazaarId");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentTerm_orderId_key" ON "PaymentTerm"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentTerm_searchId_key" ON "PaymentTerm"("searchId");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentTerm_sellerId_key" ON "PaymentTerm"("sellerId");

-- CreateIndex
CREATE UNIQUE INDEX "ItemQuantity_menuItemId_key" ON "ItemQuantity"("menuItemId");

-- CreateIndex
CREATE UNIQUE INDEX "Tracking_fulfillmentSpecificationsId_key" ON "Tracking"("fulfillmentSpecificationsId");

-- CreateIndex
CREATE UNIQUE INDEX "Courier_usersId_key" ON "Courier"("usersId");

-- CreateIndex
CREATE UNIQUE INDEX "Cancellation_orderId_key" ON "Cancellation"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "_IndividualToWaypoint_AB_unique" ON "_IndividualToWaypoint"("A", "B");

-- CreateIndex
CREATE INDEX "_IndividualToWaypoint_B_index" ON "_IndividualToWaypoint"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ContactToOrganization_AB_unique" ON "_ContactToOrganization"("A", "B");

-- CreateIndex
CREATE INDEX "_ContactToOrganization_B_index" ON "_ContactToOrganization"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LocationToPromotion_AB_unique" ON "_LocationToPromotion"("A", "B");

-- CreateIndex
CREATE INDEX "_LocationToPromotion_B_index" ON "_LocationToPromotion"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CourierToOrganization_AB_unique" ON "_CourierToOrganization"("A", "B");

-- CreateIndex
CREATE INDEX "_CourierToOrganization_B_index" ON "_CourierToOrganization"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_menuItemsSelectedModifiers_AB_unique" ON "_menuItemsSelectedModifiers"("A", "B");

-- CreateIndex
CREATE INDEX "_menuItemsSelectedModifiers_B_index" ON "_menuItemsSelectedModifiers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MenuItemToOrder_AB_unique" ON "_MenuItemToOrder"("A", "B");

-- CreateIndex
CREATE INDEX "_MenuItemToOrder_B_index" ON "_MenuItemToOrder"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MenuItemToOrganization_AB_unique" ON "_MenuItemToOrganization"("A", "B");

-- CreateIndex
CREATE INDEX "_MenuItemToOrganization_B_index" ON "_MenuItemToOrganization"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MenuItemToQuote_AB_unique" ON "_MenuItemToQuote"("A", "B");

-- CreateIndex
CREATE INDEX "_MenuItemToQuote_B_index" ON "_MenuItemToQuote"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BazaarToSeller_AB_unique" ON "_BazaarToSeller"("A", "B");

-- CreateIndex
CREATE INDEX "_BazaarToSeller_B_index" ON "_BazaarToSeller"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrderToPromotion_AB_unique" ON "_OrderToPromotion"("A", "B");

-- CreateIndex
CREATE INDEX "_OrderToPromotion_B_index" ON "_OrderToPromotion"("B");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_individualsId_fkey" FOREIGN KEY ("individualsId") REFERENCES "Individual"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_menuItemId_fkey" FOREIGN KEY ("menuItemId") REFERENCES "MenuItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_ratingId_fkey" FOREIGN KEY ("ratingId") REFERENCES "Rating"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MediaFile" ADD CONSTRAINT "MediaFile_menuItemsId_fkey" FOREIGN KEY ("menuItemsId") REFERENCES "MenuItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MediaFile" ADD CONSTRAINT "MediaFile_ratingId_fkey" FOREIGN KEY ("ratingId") REFERENCES "Rating"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Individual" ADD CONSTRAINT "Individual_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Individual" ADD CONSTRAINT "Individual_couriersId_fkey" FOREIGN KEY ("couriersId") REFERENCES "Courier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Individual" ADD CONSTRAINT "Individual_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentSource" ADD CONSTRAINT "PaymentSource_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_nodeId_fkey" FOREIGN KEY ("nodeId") REFERENCES "Node"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_organizationsId_fkey" FOREIGN KEY ("organizationsId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_trackingsId_fkey" FOREIGN KEY ("trackingsId") REFERENCES "Tracking"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_waypointsId_fkey" FOREIGN KEY ("waypointsId") REFERENCES "Waypoint"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seller" ADD CONSTRAINT "Seller_searchId_fkey" FOREIGN KEY ("searchId") REFERENCES "Search"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seller" ADD CONSTRAINT "Seller_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentTerm" ADD CONSTRAINT "PaymentTerm_bazaarId_fkey" FOREIGN KEY ("bazaarId") REFERENCES "Bazaar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentTerm" ADD CONSTRAINT "PaymentTerm_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentTerm" ADD CONSTRAINT "PaymentTerm_paymentSourceId_fkey" FOREIGN KEY ("paymentSourceId") REFERENCES "PaymentSource"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentTerm" ADD CONSTRAINT "PaymentTerm_searchId_fkey" FOREIGN KEY ("searchId") REFERENCES "Search"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentTerm" ADD CONSTRAINT "PaymentTerm_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Promotion" ADD CONSTRAINT "Promotion_bazaarId_fkey" FOREIGN KEY ("bazaarId") REFERENCES "Bazaar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Promotion" ADD CONSTRAINT "Promotion_searchId_fkey" FOREIGN KEY ("searchId") REFERENCES "Search"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Promotion" ADD CONSTRAINT "Promotion_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModifierGroup" ADD CONSTRAINT "ModifierGroup_sellerModifierGroupsId_fkey" FOREIGN KEY ("sellerModifierGroupsId") REFERENCES "Seller"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemQuantity" ADD CONSTRAINT "ItemQuantity_allocatedMeasureId_fkey" FOREIGN KEY ("allocatedMeasureId") REFERENCES "Scalar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemQuantity" ADD CONSTRAINT "ItemQuantity_availableMeasureId_fkey" FOREIGN KEY ("availableMeasureId") REFERENCES "Scalar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemQuantity" ADD CONSTRAINT "ItemQuantity_maximumPurchasableMeasureId_fkey" FOREIGN KEY ("maximumPurchasableMeasureId") REFERENCES "Scalar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemQuantity" ADD CONSTRAINT "ItemQuantity_menuItemId_fkey" FOREIGN KEY ("menuItemId") REFERENCES "MenuItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemQuantity" ADD CONSTRAINT "ItemQuantity_minimumPurchasableMeasureId_fkey" FOREIGN KEY ("minimumPurchasableMeasureId") REFERENCES "Scalar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemQuantity" ADD CONSTRAINT "ItemQuantity_selectedMeasureId_fkey" FOREIGN KEY ("selectedMeasureId") REFERENCES "Scalar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_courierId_fkey" FOREIGN KEY ("courierId") REFERENCES "Courier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tracking" ADD CONSTRAINT "Tracking_fulfillmentSpecificationsId_fkey" FOREIGN KEY ("fulfillmentSpecificationsId") REFERENCES "FulfillmentSpecification"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Billing" ADD CONSTRAINT "Billing_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courier" ADD CONSTRAINT "Courier_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Waypoint" ADD CONSTRAINT "Waypoint_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Waypoint" ADD CONSTRAINT "Waypoint_fulfillmentSpecificationId_fkey" FOREIGN KEY ("fulfillmentSpecificationId") REFERENCES "FulfillmentSpecification"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cancellation" ADD CONSTRAINT "Cancellation_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FulfillmentSpecification" ADD CONSTRAINT "FulfillmentSpecification_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FulfillmentSpecification" ADD CONSTRAINT "FulfillmentSpecification_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FulfillmentSpecification" ADD CONSTRAINT "FulfillmentSpecification_courierId_fkey" FOREIGN KEY ("courierId") REFERENCES "Courier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FulfillmentSpecification" ADD CONSTRAINT "FulfillmentSpecification_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FulfillmentSpecification" ADD CONSTRAINT "FulfillmentSpecification_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuItem" ADD CONSTRAINT "MenuItem_sellersId_fkey" FOREIGN KEY ("sellersId") REFERENCES "Seller"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_billingId_fkey" FOREIGN KEY ("billingId") REFERENCES "Billing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_fulfillmentSpecificationId_fkey" FOREIGN KEY ("fulfillmentSpecificationId") REFERENCES "FulfillmentSpecification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Condition" ADD CONSTRAINT "Condition_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Search" ADD CONSTRAINT "Search_fulfillmentSpecificationId_fkey" FOREIGN KEY ("fulfillmentSpecificationId") REFERENCES "FulfillmentSpecification"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Search" ADD CONSTRAINT "Search_menuItemsId_fkey" FOREIGN KEY ("menuItemsId") REFERENCES "MenuItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HourInterval" ADD CONSTRAINT "HourInterval_menusId_fkey" FOREIGN KEY ("menusId") REFERENCES "Menu"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IndividualToWaypoint" ADD CONSTRAINT "_IndividualToWaypoint_A_fkey" FOREIGN KEY ("A") REFERENCES "Individual"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IndividualToWaypoint" ADD CONSTRAINT "_IndividualToWaypoint_B_fkey" FOREIGN KEY ("B") REFERENCES "Waypoint"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContactToOrganization" ADD CONSTRAINT "_ContactToOrganization_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContactToOrganization" ADD CONSTRAINT "_ContactToOrganization_B_fkey" FOREIGN KEY ("B") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LocationToPromotion" ADD CONSTRAINT "_LocationToPromotion_A_fkey" FOREIGN KEY ("A") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LocationToPromotion" ADD CONSTRAINT "_LocationToPromotion_B_fkey" FOREIGN KEY ("B") REFERENCES "Promotion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourierToOrganization" ADD CONSTRAINT "_CourierToOrganization_A_fkey" FOREIGN KEY ("A") REFERENCES "Courier"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourierToOrganization" ADD CONSTRAINT "_CourierToOrganization_B_fkey" FOREIGN KEY ("B") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_menuItemsSelectedModifiers" ADD CONSTRAINT "_menuItemsSelectedModifiers_A_fkey" FOREIGN KEY ("A") REFERENCES "MenuItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_menuItemsSelectedModifiers" ADD CONSTRAINT "_menuItemsSelectedModifiers_B_fkey" FOREIGN KEY ("B") REFERENCES "MenuItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MenuItemToOrder" ADD CONSTRAINT "_MenuItemToOrder_A_fkey" FOREIGN KEY ("A") REFERENCES "MenuItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MenuItemToOrder" ADD CONSTRAINT "_MenuItemToOrder_B_fkey" FOREIGN KEY ("B") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MenuItemToOrganization" ADD CONSTRAINT "_MenuItemToOrganization_A_fkey" FOREIGN KEY ("A") REFERENCES "MenuItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MenuItemToOrganization" ADD CONSTRAINT "_MenuItemToOrganization_B_fkey" FOREIGN KEY ("B") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MenuItemToQuote" ADD CONSTRAINT "_MenuItemToQuote_A_fkey" FOREIGN KEY ("A") REFERENCES "MenuItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MenuItemToQuote" ADD CONSTRAINT "_MenuItemToQuote_B_fkey" FOREIGN KEY ("B") REFERENCES "Quote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BazaarToSeller" ADD CONSTRAINT "_BazaarToSeller_A_fkey" FOREIGN KEY ("A") REFERENCES "Bazaar"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BazaarToSeller" ADD CONSTRAINT "_BazaarToSeller_B_fkey" FOREIGN KEY ("B") REFERENCES "Seller"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderToPromotion" ADD CONSTRAINT "_OrderToPromotion_A_fkey" FOREIGN KEY ("A") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderToPromotion" ADD CONSTRAINT "_OrderToPromotion_B_fkey" FOREIGN KEY ("B") REFERENCES "Promotion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

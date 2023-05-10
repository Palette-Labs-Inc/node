import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ImageList } from "./image/ImageList";
import { ImageCreate } from "./image/ImageCreate";
import { ImageEdit } from "./image/ImageEdit";
import { ImageShow } from "./image/ImageShow";
import { MediaFileList } from "./mediaFile/MediaFileList";
import { MediaFileCreate } from "./mediaFile/MediaFileCreate";
import { MediaFileEdit } from "./mediaFile/MediaFileEdit";
import { MediaFileShow } from "./mediaFile/MediaFileShow";
import { IndividualList } from "./individual/IndividualList";
import { IndividualCreate } from "./individual/IndividualCreate";
import { IndividualEdit } from "./individual/IndividualEdit";
import { IndividualShow } from "./individual/IndividualShow";
import { ContactList } from "./contact/ContactList";
import { ContactCreate } from "./contact/ContactCreate";
import { ContactEdit } from "./contact/ContactEdit";
import { ContactShow } from "./contact/ContactShow";
import { PaymentSourceList } from "./paymentSource/PaymentSourceList";
import { PaymentSourceCreate } from "./paymentSource/PaymentSourceCreate";
import { PaymentSourceEdit } from "./paymentSource/PaymentSourceEdit";
import { PaymentSourceShow } from "./paymentSource/PaymentSourceShow";
import { ScalarList } from "./scalar/ScalarList";
import { ScalarCreate } from "./scalar/ScalarCreate";
import { ScalarEdit } from "./scalar/ScalarEdit";
import { ScalarShow } from "./scalar/ScalarShow";
import { LocationList } from "./location/LocationList";
import { LocationCreate } from "./location/LocationCreate";
import { LocationEdit } from "./location/LocationEdit";
import { LocationShow } from "./location/LocationShow";
import { SellerList } from "./seller/SellerList";
import { SellerCreate } from "./seller/SellerCreate";
import { SellerEdit } from "./seller/SellerEdit";
import { SellerShow } from "./seller/SellerShow";
import { PaymentTermList } from "./paymentTerm/PaymentTermList";
import { PaymentTermCreate } from "./paymentTerm/PaymentTermCreate";
import { PaymentTermEdit } from "./paymentTerm/PaymentTermEdit";
import { PaymentTermShow } from "./paymentTerm/PaymentTermShow";
import { PromotionList } from "./promotion/PromotionList";
import { PromotionCreate } from "./promotion/PromotionCreate";
import { PromotionEdit } from "./promotion/PromotionEdit";
import { PromotionShow } from "./promotion/PromotionShow";
import { ModifierGroupList } from "./modifierGroup/ModifierGroupList";
import { ModifierGroupCreate } from "./modifierGroup/ModifierGroupCreate";
import { ModifierGroupEdit } from "./modifierGroup/ModifierGroupEdit";
import { ModifierGroupShow } from "./modifierGroup/ModifierGroupShow";
import { ItemQuantityList } from "./itemQuantity/ItemQuantityList";
import { ItemQuantityCreate } from "./itemQuantity/ItemQuantityCreate";
import { ItemQuantityEdit } from "./itemQuantity/ItemQuantityEdit";
import { ItemQuantityShow } from "./itemQuantity/ItemQuantityShow";
import { OrganizationList } from "./organization/OrganizationList";
import { OrganizationCreate } from "./organization/OrganizationCreate";
import { OrganizationEdit } from "./organization/OrganizationEdit";
import { OrganizationShow } from "./organization/OrganizationShow";
import { VehicleList } from "./vehicle/VehicleList";
import { VehicleCreate } from "./vehicle/VehicleCreate";
import { VehicleEdit } from "./vehicle/VehicleEdit";
import { VehicleShow } from "./vehicle/VehicleShow";
import { RatingList } from "./rating/RatingList";
import { RatingCreate } from "./rating/RatingCreate";
import { RatingEdit } from "./rating/RatingEdit";
import { RatingShow } from "./rating/RatingShow";
import { TrackingList } from "./tracking/TrackingList";
import { TrackingCreate } from "./tracking/TrackingCreate";
import { TrackingEdit } from "./tracking/TrackingEdit";
import { TrackingShow } from "./tracking/TrackingShow";
import { BillingList } from "./billing/BillingList";
import { BillingCreate } from "./billing/BillingCreate";
import { BillingEdit } from "./billing/BillingEdit";
import { BillingShow } from "./billing/BillingShow";
import { CourierList } from "./courier/CourierList";
import { CourierCreate } from "./courier/CourierCreate";
import { CourierEdit } from "./courier/CourierEdit";
import { CourierShow } from "./courier/CourierShow";
import { WaypointList } from "./waypoint/WaypointList";
import { WaypointCreate } from "./waypoint/WaypointCreate";
import { WaypointEdit } from "./waypoint/WaypointEdit";
import { WaypointShow } from "./waypoint/WaypointShow";
import { CancellationList } from "./cancellation/CancellationList";
import { CancellationCreate } from "./cancellation/CancellationCreate";
import { CancellationEdit } from "./cancellation/CancellationEdit";
import { CancellationShow } from "./cancellation/CancellationShow";
import { QuoteList } from "./quote/QuoteList";
import { QuoteCreate } from "./quote/QuoteCreate";
import { QuoteEdit } from "./quote/QuoteEdit";
import { QuoteShow } from "./quote/QuoteShow";
import { FulfillmentSpecificationList } from "./fulfillmentSpecification/FulfillmentSpecificationList";
import { FulfillmentSpecificationCreate } from "./fulfillmentSpecification/FulfillmentSpecificationCreate";
import { FulfillmentSpecificationEdit } from "./fulfillmentSpecification/FulfillmentSpecificationEdit";
import { FulfillmentSpecificationShow } from "./fulfillmentSpecification/FulfillmentSpecificationShow";
import { MenuItemList } from "./menuItem/MenuItemList";
import { MenuItemCreate } from "./menuItem/MenuItemCreate";
import { MenuItemEdit } from "./menuItem/MenuItemEdit";
import { MenuItemShow } from "./menuItem/MenuItemShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { MenuList } from "./menu/MenuList";
import { MenuCreate } from "./menu/MenuCreate";
import { MenuEdit } from "./menu/MenuEdit";
import { MenuShow } from "./menu/MenuShow";
import { BazaarList } from "./bazaar/BazaarList";
import { BazaarCreate } from "./bazaar/BazaarCreate";
import { BazaarEdit } from "./bazaar/BazaarEdit";
import { BazaarShow } from "./bazaar/BazaarShow";
import { SupportList } from "./support/SupportList";
import { SupportCreate } from "./support/SupportCreate";
import { SupportEdit } from "./support/SupportEdit";
import { SupportShow } from "./support/SupportShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { NodeList } from "./node/NodeList";
import { NodeCreate } from "./node/NodeCreate";
import { NodeEdit } from "./node/NodeEdit";
import { NodeShow } from "./node/NodeShow";
import { ConditionList } from "./condition/ConditionList";
import { ConditionCreate } from "./condition/ConditionCreate";
import { ConditionEdit } from "./condition/ConditionEdit";
import { ConditionShow } from "./condition/ConditionShow";
import { SearchList } from "./search/SearchList";
import { SearchCreate } from "./search/SearchCreate";
import { SearchEdit } from "./search/SearchEdit";
import { SearchShow } from "./search/SearchShow";
import { HourIntervalList } from "./hourInterval/HourIntervalList";
import { HourIntervalCreate } from "./hourInterval/HourIntervalCreate";
import { HourIntervalEdit } from "./hourInterval/HourIntervalEdit";
import { HourIntervalShow } from "./hourInterval/HourIntervalShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"The Universal Transaction Protocol (UTP)"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Image"
          list={ImageList}
          edit={ImageEdit}
          create={ImageCreate}
          show={ImageShow}
        />
        <Resource
          name="MediaFile"
          list={MediaFileList}
          edit={MediaFileEdit}
          create={MediaFileCreate}
          show={MediaFileShow}
        />
        <Resource
          name="Individual"
          list={IndividualList}
          edit={IndividualEdit}
          create={IndividualCreate}
          show={IndividualShow}
        />
        <Resource
          name="Contact"
          list={ContactList}
          edit={ContactEdit}
          create={ContactCreate}
          show={ContactShow}
        />
        <Resource
          name="PaymentSource"
          list={PaymentSourceList}
          edit={PaymentSourceEdit}
          create={PaymentSourceCreate}
          show={PaymentSourceShow}
        />
        <Resource
          name="Scalar"
          list={ScalarList}
          edit={ScalarEdit}
          create={ScalarCreate}
          show={ScalarShow}
        />
        <Resource
          name="Location"
          list={LocationList}
          edit={LocationEdit}
          create={LocationCreate}
          show={LocationShow}
        />
        <Resource
          name="Seller"
          list={SellerList}
          edit={SellerEdit}
          create={SellerCreate}
          show={SellerShow}
        />
        <Resource
          name="PaymentTerm"
          list={PaymentTermList}
          edit={PaymentTermEdit}
          create={PaymentTermCreate}
          show={PaymentTermShow}
        />
        <Resource
          name="Promotion"
          list={PromotionList}
          edit={PromotionEdit}
          create={PromotionCreate}
          show={PromotionShow}
        />
        <Resource
          name="ModifierGroup"
          list={ModifierGroupList}
          edit={ModifierGroupEdit}
          create={ModifierGroupCreate}
          show={ModifierGroupShow}
        />
        <Resource
          name="ItemQuantity"
          list={ItemQuantityList}
          edit={ItemQuantityEdit}
          create={ItemQuantityCreate}
          show={ItemQuantityShow}
        />
        <Resource
          name="Organization"
          list={OrganizationList}
          edit={OrganizationEdit}
          create={OrganizationCreate}
          show={OrganizationShow}
        />
        <Resource
          name="Vehicle"
          list={VehicleList}
          edit={VehicleEdit}
          create={VehicleCreate}
          show={VehicleShow}
        />
        <Resource
          name="Rating"
          list={RatingList}
          edit={RatingEdit}
          create={RatingCreate}
          show={RatingShow}
        />
        <Resource
          name="Tracking"
          list={TrackingList}
          edit={TrackingEdit}
          create={TrackingCreate}
          show={TrackingShow}
        />
        <Resource
          name="Billing"
          list={BillingList}
          edit={BillingEdit}
          create={BillingCreate}
          show={BillingShow}
        />
        <Resource
          name="Courier"
          list={CourierList}
          edit={CourierEdit}
          create={CourierCreate}
          show={CourierShow}
        />
        <Resource
          name="Waypoint"
          list={WaypointList}
          edit={WaypointEdit}
          create={WaypointCreate}
          show={WaypointShow}
        />
        <Resource
          name="Cancellation"
          list={CancellationList}
          edit={CancellationEdit}
          create={CancellationCreate}
          show={CancellationShow}
        />
        <Resource
          name="Quote"
          list={QuoteList}
          edit={QuoteEdit}
          create={QuoteCreate}
          show={QuoteShow}
        />
        <Resource
          name="FulfillmentSpecification"
          list={FulfillmentSpecificationList}
          edit={FulfillmentSpecificationEdit}
          create={FulfillmentSpecificationCreate}
          show={FulfillmentSpecificationShow}
        />
        <Resource
          name="MenuItem"
          list={MenuItemList}
          edit={MenuItemEdit}
          create={MenuItemCreate}
          show={MenuItemShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="Menu"
          list={MenuList}
          edit={MenuEdit}
          create={MenuCreate}
          show={MenuShow}
        />
        <Resource
          name="Bazaar"
          list={BazaarList}
          edit={BazaarEdit}
          create={BazaarCreate}
          show={BazaarShow}
        />
        <Resource
          name="Support"
          list={SupportList}
          edit={SupportEdit}
          create={SupportCreate}
          show={SupportShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Node"
          list={NodeList}
          edit={NodeEdit}
          create={NodeCreate}
          show={NodeShow}
        />
        <Resource
          name="Condition"
          list={ConditionList}
          edit={ConditionEdit}
          create={ConditionCreate}
          show={ConditionShow}
        />
        <Resource
          name="Search"
          list={SearchList}
          edit={SearchEdit}
          create={SearchCreate}
          show={SearchShow}
        />
        <Resource
          name="HourInterval"
          list={HourIntervalList}
          edit={HourIntervalEdit}
          create={HourIntervalCreate}
          show={HourIntervalShow}
        />
      </Admin>
    </div>
  );
};

export default App;

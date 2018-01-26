/**
 * @typedef {string} Edm.String
 * @typedef {string} Edm.Binary
 * @typedef {boolean} Edm.Boolean
 * @typedef {{type:string}} __metadata
 * @typedef {string} Edm.DateTimeOffset
 * @typedef {string} Edm.DateTime
 * @typedef {string} Edm.Guid
 * @typedef {string} Edm.Decimal
 * @typedef {{content:string,__metadata:__metadata}} c4codata.ENCRYPTED_LONG_Name
 * @typedef {{content:string,__metadata:__metadata}} c4codata.EXTENDED_Name
 */

export class C4CODataType {}

export class Account extends C4CODataType {

  /**
   * @description ABC Classification
   * @type {Edm.String} 
   * @memberof Account
   */
  ABCClassificationCode

  /**
   * @description ABCClassificationCodeText
   * @type {Edm.String} 
   * @memberof Account
   */
  ABCClassificationCodeText

  /**
   * @description Formatted Name
   * @type {Edm.String} 
   * @memberof Account
   */
  AccountFormattedName

  /**
   * @description Account ID
   * @type {Edm.String} 
   * @memberof Account
   */
  AccountID

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof Account
   */
  AccountName

  /**
   * @description Additional Name
   * @type {Edm.String} 
   * @memberof Account
   */
  AccountName2

  /**
   * @description Additional Name 2
   * @type {Edm.String} 
   * @memberof Account
   */
  AccountName3

  /**
   * @description Additional Name 3
   * @type {Edm.String} 
   * @memberof Account
   */
  AccountName4

  /**
   * @description Address Line 2
   * @type {Edm.String} 
   * @memberof Account
   */
  AdditionalStreetPrefixName

  /**
   * @description Address Line 5
   * @type {Edm.String} 
   * @memberof Account
   */
  AdditionalStreetSuffixName

  /**
   * @description Building
   * @type {Edm.String} 
   * @memberof Account
   */
  BuildingID

  /**
   * @description c/o
   * @type {Edm.String} 
   * @memberof Account
   */
  CareOfName

  /**
   * @description Category
   * @type {Edm.String} 
   * @memberof Account
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof Account
   */
  CategoryCodeText

  /**
   * @description Changed By Name
   * @type {Edm.String} 
   * @memberof Account
   */
  ChangedBy

  /**
   * @description Changed On
   * @type {Edm.DateTimeOffset} 
   * @memberof Account
   */
  ChangedOn

  /**
   * @description City
   * @type {Edm.String} 
   * @memberof Account
   */
  CityName

  /**
   * @description Contact Permission
   * @type {Edm.String} 
   * @memberof Account
   */
  ContactPermissionCode

  /**
   * @description ContactPermissionCodeText
   * @type {Edm.String} 
   * @memberof Account
   */
  ContactPermissionCodeText

  /**
   * @description Language
   * @type {Edm.String} 
   * @memberof Account
   */
  CorrespondenceLanguageCode

  /**
   * @description CorrespondenceLanguageCodeText
   * @type {Edm.String} 
   * @memberof Account
   */
  CorrespondenceLanguageCodeText

  /**
   * @description Country
   * @type {Edm.String} 
   * @memberof Account
   */
  CountryCode

  /**
   * @description CountryCodeText
   * @type {Edm.String} 
   * @memberof Account
   */
  CountryCodeText

  /**
   * @description County
   * @type {Edm.String} 
   * @memberof Account
   */
  CountyName

  /**
   * @description Created By Name
   * @type {Edm.String} 
   * @memberof Account
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTimeOffset} 
   * @memberof Account
   */
  CreatedOn

  /**
   * @description D-U-N-S
   * @type {Edm.String} 
   * @memberof Account
   */
  DUNS

  /**
   * @description District
   * @type {Edm.String} 
   * @memberof Account
   */
  DistrictName

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof Account
   */
  ETag

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof Account
   */
  Email

  /**
   * @description Fax
   * @type {Edm.String} 
   * @memberof Account
   */
  Fax

  /**
   * @description House Number
   * @type {Edm.String} 
   * @memberof Account
   */
  HouseID

  /**
   * @description Industry
   * @type {Edm.String} 
   * @memberof Account
   */
  IndustryCode

  /**
   * @description IndustryCodeText
   * @type {Edm.String} 
   * @memberof Account
   */
  IndustryCodeText

  /**
   * @description Legal Form
   * @type {Edm.String} 
   * @memberof Account
   */
  LegalFormCode

  /**
   * @description LegalFormCodeText
   * @type {Edm.String} 
   * @memberof Account
   */
  LegalFormCodeText

  /**
   * @description Marketing Lead
   * @type {Edm.Boolean} 
   * @memberof Account
   */
  MarketingLeadIndicator

  /**
   * @description Mobile
   * @type {Edm.String} 
   * @memberof Account
   */
  Mobile

  /**
   * @description Nielsen ID
   * @type {Edm.String} 
   * @memberof Account
   */
  NielsenID

  /**
   * @description NielsenIDText
   * @type {Edm.String} 
   * @memberof Account
   */
  NielsenIDText

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof Account
   */
  ObjectID

  /**
   * @description Owner Name
   * @type {Edm.String} 
   * @memberof Account
   */
  OwnerFormattedName

  /**
   * @description Owner ID
   * @type {Edm.String} 
   * @memberof Account
   */
  OwnerID

  /**
   * @description Owner
   * @type {Edm.Guid} 
   * @memberof Account
   */
  OwnerUUID

  /**
   * @description P.O. Box City
   * @type {Edm.String} 
   * @memberof Account
   */
  POBoxDeviatingCityName

  /**
   * @description P.O. Box Country
   * @type {Edm.String} 
   * @memberof Account
   */
  POBoxDeviatingCountryCode

  /**
   * @description POBoxDeviatingCountryCodeText
   * @type {Edm.String} 
   * @memberof Account
   */
  POBoxDeviatingCountryCodeText

  /**
   * @description P.O. Box State
   * @type {Edm.String} 
   * @memberof Account
   */
  POBoxDeviatingRegionCode

  /**
   * @description POBoxDeviatingRegionCodeText
   * @type {Edm.String} 
   * @memberof Account
   */
  POBoxDeviatingRegionCodeText

  /**
   * @description P.O. Box
   * @type {Edm.String} 
   * @memberof Account
   */
  POBoxID

  /**
   * @description P.O. Box Postal Code
   * @type {Edm.String} 
   * @memberof Account
   */
  POBoxPostalCode

  /**
   * @description POBoxPostalCodeText
   * @type {Edm.String} 
   * @memberof Account
   */
  POBoxPostalCodeText

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof Account
   */
  Phone

  /**
   * @description Best Reached By
   * @type {Edm.String} 
   * @memberof Account
   */
  PreferredCommunicationMediumTypeCode

  /**
   * @description PreferredCommunicationMediumTypeCodeText
   * @type {Edm.String} 
   * @memberof Account
   */
  PreferredCommunicationMediumTypeCodeText

  /**
   * @description Main Contact ID
   * @type {Edm.String} 
   * @memberof Account
   */
  PrimaryContactID

  /**
   * @description Main Contact Name
   * @type {Edm.String} 
   * @memberof Account
   */
  PrimaryContactName

  /**
   * @description Recommended Visit Frequency
   * @type {Edm.String} 
   * @memberof Account
   */
  RecommendedVisitingFrequency

  /**
   * @description State
   * @type {Edm.String} 
   * @memberof Account
   */
  RegionCode

  /**
   * @description RegionCodeText
   * @type {Edm.String} 
   * @memberof Account
   */
  RegionCodeText

  /**
   * @description Role
   * @type {Edm.String} 
   * @memberof Account
   */
  RoleCode

  /**
   * @description RoleCodeText
   * @type {Edm.String} 
   * @memberof Account
   */
  RoleCodeText

  /**
   * @description Status
   * @type {Edm.String} 
   * @memberof Account
   */
  StatusCode

  /**
   * @description StatusCodeText
   * @type {Edm.String} 
   * @memberof Account
   */
  StatusCodeText

  /**
   * @description Street
   * @type {Edm.String} 
   * @memberof Account
   */
  StreetName

  /**
   * @description Postal Code
   * @type {Edm.String} 
   * @memberof Account
   */
  StreetPostalCode

  /**
   * @description StreetPostalCodeText
   * @type {Edm.String} 
   * @memberof Account
   */
  StreetPostalCodeText

  /**
   * @description Address Line 1
   * @type {Edm.String} 
   * @memberof Account
   */
  StreetPrefixName

  /**
   * @description Address Line 4
   * @type {Edm.String} 
   * @memberof Account
   */
  StreetSuffixName

  /**
   * @description Tax Jurisdiction Code
   * @type {Edm.String} 
   * @memberof Account
   */
  TaxJurisdictionCode

  /**
   * @description TaxJurisdictionCodeText
   * @type {Edm.String} 
   * @memberof Account
   */
  TaxJurisdictionCodeText

  /**
   * @description Time Zone
   * @type {Edm.String} 
   * @memberof Account
   */
  TimeZoneCode

  /**
   * @description TimeZoneCodeText
   * @type {Edm.String} 
   * @memberof Account
   */
  TimeZoneCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof Account
   */
  UUID

  /**
   * @description Web Site
   * @type {Edm.String} 
   * @memberof Account
   */
  Web

  /**
   * @type {AccountAddress|AccountAddress[]} 
   * @memberof Account
   */
  AccountAddress

  /**
   * @type {AccountAttachment|AccountAttachment[]} 
   * @memberof Account
   */
  AccountAttachment

  /**
   * @type {AccountContactRelationship|AccountContactRelationship[]} 
   * @memberof Account
   */
  AccountContactRelationship

  /**
   * @type {AccountNotes|AccountNotes[]} 
   * @memberof Account
   */
  AccountNotes

  /**
   * @type {AccountRole|AccountRole[]} 
   * @memberof Account
   */
  AccountRole

  /**
   * @type {AccountSalesData|AccountSalesData[]} 
   * @memberof Account
   */
  AccountSalesData

  /**
   * @type {AccountTeam|AccountTeam[]} 
   * @memberof Account
   */
  AccountTeam

  /**
   * @type {ExternalIDMapping|ExternalIDMapping[]} 
   * @memberof Account
   */
  ExternalIDMapping
}

export class AccountAddress extends C4CODataType {

  /**
   * @description Address Line 2
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  AdditionalStreetPrefixName

  /**
   * @description Address Line 5
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  AdditionalStreetSuffixName

  /**
   * @description c/o
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  CareOfName

  /**
   * @description City
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  City

  /**
   * @description Country
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  CountryCode

  /**
   * @description CountryCodeText
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  CountryCodeText

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  EMail

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof AccountAddress
   */
  ETag

  /**
   * @description Fax
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  Fax

  /**
   * @description Address
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  FormattedAddress

  /**
   * @description Latitude
   * @type {Edm.Decimal} 
   * @memberof AccountAddress
   */
  Latitude

  /**
   * @description Longitude
   * @type {Edm.Decimal} 
   * @memberof AccountAddress
   */
  Longitude

  /**
   * @description Mobile
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  Mobile

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  ObjectID

  /**
   * @description P.O. Box
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  POBox

  /**
   * @description POBoxAddress
   * @type {Edm.Boolean} 
   * @memberof AccountAddress
   */
  POBoxAddress

  /**
   * @description P.O. Box Postal Code
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  POBoxPostalCode

  /**
   * @description POBoxPostalCodeText
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  POBoxPostalCodeText

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  ParentObjectID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  Phone

  /**
   * @description Postal Code
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  PostalCode

  /**
   * @description PostalCodeText
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  PostalCodeText

  /**
   * @description State
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  State

  /**
   * @description StateText
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  StateText

  /**
   * @description Street
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  Street

  /**
   * @description Address Line 1
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  StreetPrefixName

  /**
   * @description Address Line 4
   * @type {Edm.String} 
   * @memberof AccountAddress
   */
  StreetSuffixName

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof AccountAddress
   */
  UUID

  /**
   * @type {Account|Account[]} 
   * @memberof AccountAddress
   */
  Account
}

export class AccountAttachment extends C4CODataType {

  /**
   * @description Binary
   * @type {Edm.Binary} 
   * @memberof AccountAttachment
   */
  Binary

  /**
   * @description Category Code
   * @type {Edm.String} 
   * @memberof AccountAttachment
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof AccountAttachment
   */
  CategoryCodeText

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof AccountAttachment
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof AccountAttachment
   */
  CreatedOn

  /**
   * @description Document Link
   * @type {Edm.String} 
   * @memberof AccountAttachment
   */
  DocumentLink

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof AccountAttachment
   */
  ETag

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof AccountAttachment
   */
  LastUpdatedBy

  /**
   * @description Last Updated On
   * @type {Edm.DateTime} 
   * @memberof AccountAttachment
   */
  LastUpdatedOn

  /**
   * @description Link Web URI
   * @type {Edm.String} 
   * @memberof AccountAttachment
   */
  LinkWebURI

  /**
   * @description Mime Type
   * @type {Edm.String} 
   * @memberof AccountAttachment
   */
  MimeType

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof AccountAttachment
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof AccountAttachment
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof AccountAttachment
   */
  ParentObjectID

  /**
   * @description Size In KiloBytes
   * @type {Edm.Decimal} 
   * @memberof AccountAttachment
   */
  SizeInkB

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof AccountAttachment
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof AccountAttachment
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof AccountAttachment
   */
  UUID
}

export class AccountContactCommunicationData extends C4CODataType {

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof AccountContactCommunicationData
   */
  EMail

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof AccountContactCommunicationData
   */
  ETag

  /**
   * @description Fax
   * @type {Edm.String} 
   * @memberof AccountContactCommunicationData
   */
  Fax

  /**
   * @description Job Title
   * @type {Edm.String} 
   * @memberof AccountContactCommunicationData
   */
  JobTitle

  /**
   * @description Mobile
   * @type {Edm.String} 
   * @memberof AccountContactCommunicationData
   */
  Mobile

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof AccountContactCommunicationData
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof AccountContactCommunicationData
   */
  ParentObjectID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof AccountContactCommunicationData
   */
  Phone

  /**
   * @type {AccountContactRelationship|AccountContactRelationship[]} 
   * @memberof AccountContactCommunicationData
   */
  AccountContactRelationship
}

export class AccountContactRelationship extends C4CODataType {

  /**
   * @description AccountUUID
   * @type {Edm.Guid} 
   * @memberof AccountContactRelationship
   */
  AccountUUID

  /**
   * @description CategoryCode
   * @type {Edm.String} 
   * @memberof AccountContactRelationship
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof AccountContactRelationship
   */
  CategoryCodeText

  /**
   * @description ContactUUID
   * @type {Edm.Guid} 
   * @memberof AccountContactRelationship
   */
  ContactUUID

  /**
   * @description Department
   * @type {Edm.String} 
   * @memberof AccountContactRelationship
   */
  DepartmentCode

  /**
   * @description DepartmentCodeText
   * @type {Edm.String} 
   * @memberof AccountContactRelationship
   */
  DepartmentCodeText

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof AccountContactRelationship
   */
  EMail

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof AccountContactRelationship
   */
  ETag

  /**
   * @description Fax
   * @type {Edm.String} 
   * @memberof AccountContactRelationship
   */
  Fax

  /**
   * @description Function
   * @type {Edm.String} 
   * @memberof AccountContactRelationship
   */
  FunctionCode

  /**
   * @description FunctionCodeText
   * @type {Edm.String} 
   * @memberof AccountContactRelationship
   */
  FunctionCodeText

  /**
   * @description Job Title
   * @type {Edm.String} 
   * @memberof AccountContactRelationship
   */
  JobTitle

  /**
   * @description Main
   * @type {Edm.Boolean} 
   * @memberof AccountContactRelationship
   */
  Main

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof AccountContactRelationship
   */
  Mobile

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof AccountContactRelationship
   */
  ObjectID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof AccountContactRelationship
   */
  Phone

  /**
   * @description ReverseDefaultIndicator
   * @type {Edm.Boolean} 
   * @memberof AccountContactRelationship
   */
  ReverseDefaultIndicator

  /**
   * @description VIPReasonCode
   * @type {Edm.String} 
   * @memberof AccountContactRelationship
   */
  VIPReasonCode

  /**
   * @description VIPReasonCodeText
   * @type {Edm.String} 
   * @memberof AccountContactRelationship
   */
  VIPReasonCodeText

  /**
   * @type {AccountContactCommunicationData|AccountContactCommunicationData[]} 
   * @memberof AccountContactRelationship
   */
  AccountContactCommunicationData

  /**
   * @type {AccountContacts|AccountContacts[]} 
   * @memberof AccountContactRelationship
   */
  AccountContacts
}

export class AccountContacts extends C4CODataType {

  /**
   * @description Category
   * @type {Edm.String} 
   * @memberof AccountContacts
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof AccountContacts
   */
  CategoryCodeText

  /**
   * @description Contact ID
   * @type {Edm.String} 
   * @memberof AccountContacts
   */
  ContactID

  /**
   * @description Contact
   * @type {Edm.Guid} 
   * @memberof AccountContacts
   */
  ContactUUID

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof AccountContacts
   */
  ETag

  /**
   * @description EndDate
   * @type {Edm.DateTime} 
   * @memberof AccountContacts
   */
  EndDate

  /**
   * @description FirstName
   * @type {Edm.String} 
   * @memberof AccountContacts
   */
  FirstName

  /**
   * @description LastName
   * @type {Edm.String} 
   * @memberof AccountContacts
   */
  LastName

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof AccountContacts
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof AccountContacts
   */
  ObjectID

  /**
   * @description Role
   * @type {Edm.String} 
   * @memberof AccountContacts
   */
  RoleCode

  /**
   * @description RoleCodeText
   * @type {Edm.String} 
   * @memberof AccountContacts
   */
  RoleCodeText

  /**
   * @description StartDate
   * @type {Edm.DateTime} 
   * @memberof AccountContacts
   */
  StartDate

  /**
   * @description Status
   * @type {Edm.String} 
   * @memberof AccountContacts
   */
  StatusCode

  /**
   * @description StatusCodeText
   * @type {Edm.String} 
   * @memberof AccountContacts
   */
  StatusCodeText
}

export class AccountNotes extends C4CODataType {

  /**
   * @description Author Name
   * @type {Edm.String} 
   * @memberof AccountNotes
   */
  AuthorName

  /**
   * @description Author UUID
   * @type {Edm.Guid} 
   * @memberof AccountNotes
   */
  AuthorUUID

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof AccountNotes
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof AccountNotes
   */
  CreatedOn

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof AccountNotes
   */
  ETag

  /**
   * @description Language Code
   * @type {Edm.String} 
   * @memberof AccountNotes
   */
  LanguageCode

  /**
   * @description LanguageCodeText
   * @type {Edm.String} 
   * @memberof AccountNotes
   */
  LanguageCodeText

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof AccountNotes
   */
  LastUpdatedBy

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof AccountNotes
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof AccountNotes
   */
  ParentObjectID

  /**
   * @description Text
   * @type {Edm.String} 
   * @memberof AccountNotes
   */
  Text

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof AccountNotes
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof AccountNotes
   */
  TypeCodeText

  /**
   * @description Updated On
   * @type {Edm.DateTime} 
   * @memberof AccountNotes
   */
  UpdatedOn
}

export class AccountRole extends C4CODataType {

  /**
   * @description BusinessCharacterCode
   * @type {Edm.String} 
   * @memberof AccountRole
   */
  BusinessCharacterCode

  /**
   * @description BusinessCharacterCodeText
   * @type {Edm.String} 
   * @memberof AccountRole
   */
  BusinessCharacterCodeText

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof AccountRole
   */
  ETag

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof AccountRole
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof AccountRole
   */
  ParentObjectID

  /**
   * @description Role
   * @type {Edm.String} 
   * @memberof AccountRole
   */
  RoleCode

  /**
   * @description RoleCodeText
   * @type {Edm.String} 
   * @memberof AccountRole
   */
  RoleCodeText

  /**
   * @type {Account|Account[]} 
   * @memberof AccountRole
   */
  Account
}

export class AccountSalesData extends C4CODataType {

  /**
   * @description Billing Block
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  BillingBlockingReasonCode

  /**
   * @description BillingBlockingReasonCodeText
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  BillingBlockingReasonCodeText

  /**
   * @description Currency
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  CurrencyCode

  /**
   * @description CurrencyCodeText
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  CurrencyCodeText

  /**
   * @description Customer Group
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  CustomerGroupCode

  /**
   * @description CustomerGroupCodeText
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  CustomerGroupCodeText

  /**
   * @description Customer ID
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  CustomerID

  /**
   * @description Customer
   * @type {Edm.Guid} 
   * @memberof AccountSalesData
   */
  CustomerUUID

  /**
   * @description Delivery Block
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  DeliveryBlockingReasonCode

  /**
   * @description DeliveryBlockingReasonCodeText
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  DeliveryBlockingReasonCodeText

  /**
   * @description Delivery Priority
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  DeliveryPriorityCode

  /**
   * @description DeliveryPriorityCodeText
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  DeliveryPriorityCodeText

  /**
   * @description Distribution Channel
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  DistributionChannelCode

  /**
   * @description DistributionChannelCodeText
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  DistributionChannelCodeText

  /**
   * @description Division
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  DivisionCode

  /**
   * @description DivisionCodeText
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  DivisionCodeText

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof AccountSalesData
   */
  ETag

  /**
   * @description Incoterms
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  IncotermsCode

  /**
   * @description IncotermsCodeText
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  IncotermsCodeText

  /**
   * @description Incoterms Location
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  IncotermsLocation

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  ObjectID

  /**
   * @description Order Block
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  OrderBlockingReasonCode

  /**
   * @description OrderBlockingReasonCodeText
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  OrderBlockingReasonCodeText

  /**
   * @description Payment Terms
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  PaymentTermsCode

  /**
   * @description PaymentTermsCodeText
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  PaymentTermsCodeText

  /**
   * @description Sales Group ID
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  SalesGroupID

  /**
   * @description Sales Group
   * @type {Edm.Guid} 
   * @memberof AccountSalesData
   */
  SalesGroupUUID

  /**
   * @description Sales Office ID
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  SalesOfficeID

  /**
   * @description Sales Office
   * @type {Edm.Guid} 
   * @memberof AccountSalesData
   */
  SalesOfficeUUID

  /**
   * @description Sales Organization ID
   * @type {Edm.String} 
   * @memberof AccountSalesData
   */
  SalesOrganisationID

  /**
   * @description Sales Organization
   * @type {Edm.Guid} 
   * @memberof AccountSalesData
   */
  SalesOrganisationUUID

  /**
   * @description Sales Support Block
   * @type {Edm.Boolean} 
   * @memberof AccountSalesData
   */
  SalesSupportBlockingIndicator

  /**
   * @type {AccountSalesGroupName|AccountSalesGroupName[]} 
   * @memberof AccountSalesData
   */
  AccountSalesGroupName

  /**
   * @type {AccountSalesOfficeName|AccountSalesOfficeName[]} 
   * @memberof AccountSalesData
   */
  AccountSalesOfficeName

  /**
   * @type {AccountSalesOrganisationName|AccountSalesOrganisationName[]} 
   * @memberof AccountSalesData
   */
  AccountSalesOrganisationName
}

export class AccountSalesGroupName extends C4CODataType {

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof AccountSalesGroupName
   */
  ETag

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof AccountSalesGroupName
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof AccountSalesGroupName
   */
  ObjectID
}

export class AccountSalesOfficeName extends C4CODataType {

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof AccountSalesOfficeName
   */
  ETag

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof AccountSalesOfficeName
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof AccountSalesOfficeName
   */
  ObjectID
}

export class AccountSalesOrganisationName extends C4CODataType {

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof AccountSalesOrganisationName
   */
  ETag

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof AccountSalesOrganisationName
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof AccountSalesOrganisationName
   */
  ObjectID
}

export class AccountTeam extends C4CODataType {

  /**
   * @description Distribution Channel
   * @type {Edm.String} 
   * @memberof AccountTeam
   */
  DistributionChannelCode

  /**
   * @description DistributionChannelCodeText
   * @type {Edm.String} 
   * @memberof AccountTeam
   */
  DistributionChannelCodeText

  /**
   * @description Division
   * @type {Edm.String} 
   * @memberof AccountTeam
   */
  DivisionCode

  /**
   * @description DivisionCodeText
   * @type {Edm.String} 
   * @memberof AccountTeam
   */
  DivisionCodeText

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof AccountTeam
   */
  ETag

  /**
   * @description Employee
   * @type {Edm.Guid} 
   * @memberof AccountTeam
   */
  EmployeeUUID

  /**
   * @description End Date
   * @type {Edm.DateTime} 
   * @memberof AccountTeam
   */
  EndDate

  /**
   * @description Employee Name
   * @type {Edm.String} 
   * @memberof AccountTeam
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof AccountTeam
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof AccountTeam
   */
  ParentObjectID

  /**
   * @description Party Role
   * @type {Edm.String} 
   * @memberof AccountTeam
   */
  PartyRoleCode

  /**
   * @description PartyRoleCodeText
   * @type {Edm.String} 
   * @memberof AccountTeam
   */
  PartyRoleCodeText

  /**
   * @description Sales Organization
   * @type {Edm.Guid} 
   * @memberof AccountTeam
   */
  SalesOrganisationUUID

  /**
   * @description Start Date
   * @type {Edm.DateTime} 
   * @memberof AccountTeam
   */
  StartDate

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof AccountTeam
   */
  UUID

  /**
   * @type {Account|Account[]} 
   * @memberof AccountTeam
   */
  Account

  /**
   * @type {AccountTeamAddress|AccountTeamAddress[]} 
   * @memberof AccountTeam
   */
  AccountTeamAddress
}

export class AccountTeamAddress extends C4CODataType {

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof AccountTeamAddress
   */
  EMail

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof AccountTeamAddress
   */
  ETag

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof AccountTeamAddress
   */
  ObjectID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof AccountTeamAddress
   */
  Phone
}

export class Appointment extends C4CODataType {

  /**
   * @description Account
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof Appointment
   */
  Account

  /**
   * @description Account ID
   * @type {Edm.String} 
   * @memberof Appointment
   */
  AccountID

  /**
   * @description Account UUID
   * @type {Edm.Guid} 
   * @memberof Appointment
   */
  AccountUUID

  /**
   * @description Location Line 2
   * @type {Edm.String} 
   * @memberof Appointment
   */
  AdditionalLocationName

  /**
   * @description All Day Event
   * @type {Edm.Boolean} 
   * @memberof Appointment
   */
  AllDayEvent

  /**
   * @description Category
   * @type {Edm.String} 
   * @memberof Appointment
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof Appointment
   */
  CategoryCodeText

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof Appointment
   */
  ChangedBy

  /**
   * @description Last Changed On
   * @type {Edm.DateTimeOffset} 
   * @memberof Appointment
   */
  ChangedOn

  /**
   * @description Completion
   * @type {Edm.Decimal} 
   * @memberof Appointment
   */
  CompletionPercent

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof Appointment
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTimeOffset} 
   * @memberof Appointment
   */
  CreatedOn

  /**
   * @description Data Origin
   * @type {Edm.String} 
   * @memberof Appointment
   */
  DataOriginTypeCode

  /**
   * @description DataOriginTypeCodeText
   * @type {Edm.String} 
   * @memberof Appointment
   */
  DataOriginTypeCodeText

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof Appointment
   */
  ETag

  /**
   * @description End Date/Time
   * @type {c4codata.LOCALNORMALISED_DateTime} 
   * @memberof Appointment
   */
  EndDateTime

  /**
   * @description Groupware Item ID
   * @type {Edm.String} 
   * @memberof Appointment
   */
  GroupwareItemID

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof Appointment
   */
  ID

  /**
   * @description Location
   * @type {Edm.String} 
   * @memberof Appointment
   */
  LocationName

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof Appointment
   */
  ObjectID

  /**
   * @description Organizer Email
   * @type {Edm.String} 
   * @memberof Appointment
   */
  OrganizerEmailURI

  /**
   * @description Party ID
   * @type {Edm.String} 
   * @memberof Appointment
   */
  OrganizerID

  /**
   * @description Organizer
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof Appointment
   */
  OrganizerName

  /**
   * @description Organizer Name
   * @type {Edm.String} 
   * @memberof Appointment
   */
  OrganizerPartyName

  /**
   * @description Organizer UUID
   * @type {Edm.Guid} 
   * @memberof Appointment
   */
  OrganizerUUID

  /**
   * @description Owner
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof Appointment
   */
  Owner

  /**
   * @description Owner UUID
   * @type {Edm.Guid} 
   * @memberof Appointment
   */
  OwnerUUID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof Appointment
   */
  Phone

  /**
   * @description Primary Contact
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof Appointment
   */
  PrimaryContact

  /**
   * @description Primary Contact ID
   * @type {Edm.String} 
   * @memberof Appointment
   */
  PrimaryContactID

  /**
   * @description Primary Contact UUID
   * @type {Edm.Guid} 
   * @memberof Appointment
   */
  PrimaryContactUUID

  /**
   * @description Priority
   * @type {Edm.String} 
   * @memberof Appointment
   */
  PriorityCode

  /**
   * @description PriorityCodeText
   * @type {Edm.String} 
   * @memberof Appointment
   */
  PriorityCodeText

  /**
   * @description Reported Date/Time
   * @type {Edm.DateTimeOffset} 
   * @memberof Appointment
   */
  ReportedDateTime

  /**
   * @description Start Date/Time
   * @type {c4codata.LOCALNORMALISED_DateTime} 
   * @memberof Appointment
   */
  StartDateTime

  /**
   * @description Status
   * @type {Edm.String} 
   * @memberof Appointment
   */
  StatusCode

  /**
   * @description StatusCodeText
   * @type {Edm.String} 
   * @memberof Appointment
   */
  StatusCodeText

  /**
   * @description Subject
   * @type {Edm.String} 
   * @memberof Appointment
   */
  Subject

  /**
   * @description Activity Type
   * @type {Edm.String} 
   * @memberof Appointment
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof Appointment
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof Appointment
   */
  UUID

  /**
   * @type {AppointmentAttachment|AppointmentAttachment[]} 
   * @memberof Appointment
   */
  AppointmentAttachment

  /**
   * @type {AppointmentInvolvedParties|AppointmentInvolvedParties[]} 
   * @memberof Appointment
   */
  AppointmentInvolvedParties

  /**
   * @type {AppointmentNotes|AppointmentNotes[]} 
   * @memberof Appointment
   */
  AppointmentNotes
}

export class AppointmentAttachment extends C4CODataType {

  /**
   * @description Binary
   * @type {Edm.Binary} 
   * @memberof AppointmentAttachment
   */
  Binary

  /**
   * @description Category Code
   * @type {Edm.String} 
   * @memberof AppointmentAttachment
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof AppointmentAttachment
   */
  CategoryCodeText

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof AppointmentAttachment
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof AppointmentAttachment
   */
  CreatedOn

  /**
   * @description Document Link
   * @type {Edm.String} 
   * @memberof AppointmentAttachment
   */
  DocumentLink

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof AppointmentAttachment
   */
  ETag

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof AppointmentAttachment
   */
  LastUpdatedBy

  /**
   * @description Last Updated On
   * @type {Edm.DateTime} 
   * @memberof AppointmentAttachment
   */
  LastUpdatedOn

  /**
   * @description Link Web URI
   * @type {Edm.String} 
   * @memberof AppointmentAttachment
   */
  LinkWebURI

  /**
   * @description Mime Type
   * @type {Edm.String} 
   * @memberof AppointmentAttachment
   */
  MimeType

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof AppointmentAttachment
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof AppointmentAttachment
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof AppointmentAttachment
   */
  ParentObjectID

  /**
   * @description Size In KiloBytes
   * @type {Edm.Decimal} 
   * @memberof AppointmentAttachment
   */
  SizeInkB

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof AppointmentAttachment
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof AppointmentAttachment
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof AppointmentAttachment
   */
  UUID
}

export class AppointmentInvolvedParties extends C4CODataType {

  /**
   * @description ActivityGroupCode
   * @type {Edm.String} 
   * @memberof AppointmentInvolvedParties
   */
  ActivityGroupCode

  /**
   * @description ActivityGroupCodeText
   * @type {Edm.String} 
   * @memberof AppointmentInvolvedParties
   */
  ActivityGroupCodeText

  /**
   * @description Address
   * @type {Edm.String} 
   * @memberof AppointmentInvolvedParties
   */
  Address

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof AppointmentInvolvedParties
   */
  EMail

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof AppointmentInvolvedParties
   */
  ETag

  /**
   * @description Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof AppointmentInvolvedParties
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof AppointmentInvolvedParties
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof AppointmentInvolvedParties
   */
  ParentObjectID

  /**
   * @description Party Email
   * @type {Edm.String} 
   * @memberof AppointmentInvolvedParties
   */
  PartyEmailURI

  /**
   * @description PartyID
   * @type {Edm.String} 
   * @memberof AppointmentInvolvedParties
   */
  PartyID

  /**
   * @description Party Name
   * @type {Edm.String} 
   * @memberof AppointmentInvolvedParties
   */
  PartyName

  /**
   * @description PartyTypeCode
   * @type {Edm.String} 
   * @memberof AppointmentInvolvedParties
   */
  PartyTypeCode

  /**
   * @description PartyTypeCodeText
   * @type {Edm.String} 
   * @memberof AppointmentInvolvedParties
   */
  PartyTypeCodeText

  /**
   * @description PartyUUID
   * @type {Edm.Guid} 
   * @memberof AppointmentInvolvedParties
   */
  PartyUUID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof AppointmentInvolvedParties
   */
  Phone

  /**
   * @description RoleCode
   * @type {Edm.String} 
   * @memberof AppointmentInvolvedParties
   */
  RoleCode

  /**
   * @description RoleCodeText
   * @type {Edm.String} 
   * @memberof AppointmentInvolvedParties
   */
  RoleCodeText

  /**
   * @type {Appointment|Appointment[]} 
   * @memberof AppointmentInvolvedParties
   */
  Appointment
}

export class AppointmentNotes extends C4CODataType {

  /**
   * @description Author Name
   * @type {Edm.String} 
   * @memberof AppointmentNotes
   */
  AuthorName

  /**
   * @description Author UUID
   * @type {Edm.Guid} 
   * @memberof AppointmentNotes
   */
  AuthorUUID

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof AppointmentNotes
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof AppointmentNotes
   */
  CreatedOn

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof AppointmentNotes
   */
  ETag

  /**
   * @description Language Code
   * @type {Edm.String} 
   * @memberof AppointmentNotes
   */
  LanguageCode

  /**
   * @description LanguageCodeText
   * @type {Edm.String} 
   * @memberof AppointmentNotes
   */
  LanguageCodeText

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof AppointmentNotes
   */
  LastUpdatedBy

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof AppointmentNotes
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof AppointmentNotes
   */
  ParentObjectID

  /**
   * @description Text
   * @type {Edm.String} 
   * @memberof AppointmentNotes
   */
  Text

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof AppointmentNotes
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof AppointmentNotes
   */
  TypeCodeText

  /**
   * @description Updated On
   * @type {Edm.DateTime} 
   * @memberof AppointmentNotes
   */
  UpdatedOn
}

export class BusinessPartner extends C4CODataType {

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof BusinessPartner
   */
  ETag

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof BusinessPartner
   */
  ObjectID

  /**
   * @description Thing Type
   * @type {Edm.String} 
   * @memberof BusinessPartner
   */
  ThingType

  /**
   * @description Business Partner UUID
   * @type {Edm.Guid} 
   * @memberof BusinessPartner
   */
  UUID
}

export class CodeList extends C4CODataType {

  /**
   * @description Code
   * @type {Edm.String} 
   * @memberof CodeList
   */
  Code

  /**
   * @description Description
   * @type {Edm.String} 
   * @memberof CodeList
   */
  Description
}

export class Contact extends C4CODataType {

  /**
   * @description Academic Title
   * @type {Edm.String} 
   * @memberof Contact
   */
  AcademicTitleCode

  /**
   * @description AcademicTitleCodeText
   * @type {Edm.String} 
   * @memberof Contact
   */
  AcademicTitleCodeText

  /**
   * @description Account ID
   * @type {Edm.String} 
   * @memberof Contact
   */
  AccountID

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof Contact
   */
  AccountName

  /**
   * @description Account
   * @type {Edm.Guid} 
   * @memberof Contact
   */
  AccountUUID

  /**
   * @description Additional Academic Title
   * @type {Edm.String} 
   * @memberof Contact
   */
  AdditionalAcademicTitleCode

  /**
   * @description AdditionalAcademicTitleCodeText
   * @type {Edm.String} 
   * @memberof Contact
   */
  AdditionalAcademicTitleCodeText

  /**
   * @description Best Reached By
   * @type {Edm.String} 
   * @memberof Contact
   */
  BestReachedByCode

  /**
   * @description BestReachedByCodeText
   * @type {Edm.String} 
   * @memberof Contact
   */
  BestReachedByCodeText

  /**
   * @description Building
   * @type {Edm.String} 
   * @memberof Contact
   */
  Building

  /**
   * @description City
   * @type {Edm.String} 
   * @memberof Contact
   */
  BusinessAddressCity

  /**
   * @description Country
   * @type {Edm.String} 
   * @memberof Contact
   */
  BusinessAddressCountryCode

  /**
   * @description BusinessAddressCountryCodeText
   * @type {Edm.String} 
   * @memberof Contact
   */
  BusinessAddressCountryCodeText

  /**
   * @description House Number
   * @type {Edm.String} 
   * @memberof Contact
   */
  BusinessAddressHouseID

  /**
   * @description State
   * @type {Edm.String} 
   * @memberof Contact
   */
  BusinessAddressStateCode

  /**
   * @description BusinessAddressStateCodeText
   * @type {Edm.String} 
   * @memberof Contact
   */
  BusinessAddressStateCodeText

  /**
   * @description Street
   * @type {Edm.String} 
   * @memberof Contact
   */
  BusinessAddressStreet

  /**
   * @description Postal Code
   * @type {Edm.String} 
   * @memberof Contact
   */
  BusinessAddressStreetPostalCode

  /**
   * @description BusinessAddressStreetPostalCodeText
   * @type {Edm.String} 
   * @memberof Contact
   */
  BusinessAddressStreetPostalCodeText

  /**
   * @description Category
   * @type {Edm.String} 
   * @memberof Contact
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof Contact
   */
  CategoryCodeText

  /**
   * @description Changed By
   * @type {Edm.String} 
   * @memberof Contact
   */
  ChangedBy

  /**
   * @description Changed On
   * @type {Edm.DateTimeOffset} 
   * @memberof Contact
   */
  ChangedOn

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof Contact
   */
  ContactID

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof Contact
   */
  ContactName

  /**
   * @description Owner
   * @type {Edm.Guid} 
   * @memberof Contact
   */
  ContactOwnerUUID

  /**
   * @description Contact Permission
   * @type {Edm.String} 
   * @memberof Contact
   */
  ContactPermissionCode

  /**
   * @description ContactPermissionCodeText
   * @type {Edm.String} 
   * @memberof Contact
   */
  ContactPermissionCodeText

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof Contact
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTimeOffset} 
   * @memberof Contact
   */
  CreationOn

  /**
   * @description Department
   * @type {Edm.String} 
   * @memberof Contact
   */
  Department

  /**
   * @description Department
   * @type {Edm.String} 
   * @memberof Contact
   */
  DepartmentCode

  /**
   * @description DepartmentCodeText
   * @type {Edm.String} 
   * @memberof Contact
   */
  DepartmentCodeText

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof Contact
   */
  ETag

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof Contact
   */
  Email

  /**
   * @description E-Mail Invalid
   * @type {Edm.Boolean} 
   * @memberof Contact
   */
  EmailInvalidIndicator

  /**
   * @description End Date
   * @type {Edm.DateTime} 
   * @memberof Contact
   */
  EndDate

  /**
   * @description Fax
   * @type {Edm.String} 
   * @memberof Contact
   */
  Fax

  /**
   * @description First Name
   * @type {Edm.String} 
   * @memberof Contact
   */
  FirstName

  /**
   * @description Floor
   * @type {Edm.String} 
   * @memberof Contact
   */
  Floor

  /**
   * @description Function
   * @type {Edm.String} 
   * @memberof Contact
   */
  FunctionCode

  /**
   * @description FunctionCodeText
   * @type {Edm.String} 
   * @memberof Contact
   */
  FunctionCodeText

  /**
   * @description Gender
   * @type {Edm.String} 
   * @memberof Contact
   */
  GenderCode

  /**
   * @description GenderCodeText
   * @type {Edm.String} 
   * @memberof Contact
   */
  GenderCodeText

  /**
   * @description Function
   * @type {Edm.String} 
   * @memberof Contact
   */
  JobTitle

  /**
   * @description Language
   * @type {Edm.String} 
   * @memberof Contact
   */
  LanguageCode

  /**
   * @description LanguageCodeText
   * @type {Edm.String} 
   * @memberof Contact
   */
  LanguageCodeText

  /**
   * @description Last Name
   * @type {Edm.String} 
   * @memberof Contact
   */
  LastName

  /**
   * @description Marital Status
   * @type {Edm.String} 
   * @memberof Contact
   */
  MaritalStatusCode

  /**
   * @description MaritalStatusCodeText
   * @type {Edm.String} 
   * @memberof Contact
   */
  MaritalStatusCodeText

  /**
   * @description Marketing Lead
   * @type {Edm.Boolean} 
   * @memberof Contact
   */
  MarketingLeadIndicator

  /**
   * @description Middle Name
   * @type {Edm.String} 
   * @memberof Contact
   */
  MiddleName

  /**
   * @description Mobile
   * @type {Edm.String} 
   * @memberof Contact
   */
  Mobile

  /**
   * @description Nickname
   * @type {Edm.String} 
   * @memberof Contact
   */
  NickName

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof Contact
   */
  ObjectID

  /**
   * @description Perception Of Company
   * @type {Edm.String} 
   * @memberof Contact
   */
  PerceptionOfCompanyCode

  /**
   * @description PerceptionOfCompanyCodeText
   * @type {Edm.String} 
   * @memberof Contact
   */
  PerceptionOfCompanyCodeText

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof Contact
   */
  Phone

  /**
   * @description Role
   * @type {Edm.String} 
   * @memberof Contact
   */
  RoleCode

  /**
   * @description RoleCodeText
   * @type {Edm.String} 
   * @memberof Contact
   */
  RoleCodeText

  /**
   * @description Room
   * @type {Edm.String} 
   * @memberof Contact
   */
  Room

  /**
   * @description Start Date
   * @type {Edm.DateTime} 
   * @memberof Contact
   */
  StartDate

  /**
   * @description Status
   * @type {Edm.String} 
   * @memberof Contact
   */
  StatusCode

  /**
   * @description StatusCodeText
   * @type {Edm.String} 
   * @memberof Contact
   */
  StatusCodeText

  /**
   * @description Title
   * @type {Edm.String} 
   * @memberof Contact
   */
  TitleCode

  /**
   * @description TitleCodeText
   * @type {Edm.String} 
   * @memberof Contact
   */
  TitleCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof Contact
   */
  UUID

  /**
   * @description VIP Contact
   * @type {Edm.String} 
   * @memberof Contact
   */
  VIPContactCode

  /**
   * @description VIPContactCodeText
   * @type {Edm.String} 
   * @memberof Contact
   */
  VIPContactCodeText

  /**
   * @type {ContactAttachment|ContactAttachment[]} 
   * @memberof Contact
   */
  ContactAttachment

  /**
   * @type {ContactBusinessAddress|ContactBusinessAddress[]} 
   * @memberof Contact
   */
  ContactBusinessAddress

  /**
   * @type {ContactCommunicationData|ContactCommunicationData[]} 
   * @memberof Contact
   */
  ContactCommunicationData

  /**
   * @type {ContactNotes|ContactNotes[]} 
   * @memberof Contact
   */
  ContactNotes

  /**
   * @type {ContactPersonalAddress|ContactPersonalAddress[]} 
   * @memberof Contact
   */
  ContactPersonalAddress
}

export class ContactAttachment extends C4CODataType {

  /**
   * @description Binary
   * @type {Edm.Binary} 
   * @memberof ContactAttachment
   */
  Binary

  /**
   * @description Category Code
   * @type {Edm.String} 
   * @memberof ContactAttachment
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof ContactAttachment
   */
  CategoryCodeText

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof ContactAttachment
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof ContactAttachment
   */
  CreatedOn

  /**
   * @description Document Link
   * @type {Edm.String} 
   * @memberof ContactAttachment
   */
  DocumentLink

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ContactAttachment
   */
  ETag

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof ContactAttachment
   */
  LastUpdatedBy

  /**
   * @description Last Updated On
   * @type {Edm.DateTime} 
   * @memberof ContactAttachment
   */
  LastUpdatedOn

  /**
   * @description Link Web URI
   * @type {Edm.String} 
   * @memberof ContactAttachment
   */
  LinkWebURI

  /**
   * @description Mime Type
   * @type {Edm.String} 
   * @memberof ContactAttachment
   */
  MimeType

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof ContactAttachment
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ContactAttachment
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof ContactAttachment
   */
  ParentObjectID

  /**
   * @description Size In KiloBytes
   * @type {Edm.Decimal} 
   * @memberof ContactAttachment
   */
  SizeInkB

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof ContactAttachment
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof ContactAttachment
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof ContactAttachment
   */
  UUID
}

export class ContactBusinessAddress extends C4CODataType {

  /**
   * @description Account UUID
   * @type {Edm.Guid} 
   * @memberof ContactBusinessAddress
   */
  AccountUUID

  /**
   * @description Contact UUID
   * @type {Edm.Guid} 
   * @memberof ContactBusinessAddress
   */
  ContactUUID

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ContactBusinessAddress
   */
  ETag

  /**
   * @description FirstLineDescription
   * @type {Edm.String} 
   * @memberof ContactBusinessAddress
   */
  FirstLineDescription

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ContactBusinessAddress
   */
  ObjectID

  /**
   * @description Address
   * @type {Edm.String} 
   * @memberof ContactBusinessAddress
   */
  PostalAddress

  /**
   * @description Best Reached By
   * @type {Edm.String} 
   * @memberof ContactBusinessAddress
   */
  PreferredCommunicationMediumTypeCode

  /**
   * @description PreferredCommunicationMediumTypeCodeText
   * @type {Edm.String} 
   * @memberof ContactBusinessAddress
   */
  PreferredCommunicationMediumTypeCodeText

  /**
   * @description SecondLineDescription
   * @type {Edm.String} 
   * @memberof ContactBusinessAddress
   */
  SecondLineDescription

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof ContactBusinessAddress
   */
  UUID

  /**
   * @type {ContactBusinessPostalAddress|ContactBusinessPostalAddress[]} 
   * @memberof ContactBusinessAddress
   */
  ContactBusinessPostalAddress
}

export class ContactBusinessPostalAddress extends C4CODataType {

  /**
   * @description City
   * @type {Edm.String} 
   * @memberof ContactBusinessPostalAddress
   */
  City

  /**
   * @description Country
   * @type {Edm.String} 
   * @memberof ContactBusinessPostalAddress
   */
  CountryCode

  /**
   * @description CountryCodeText
   * @type {Edm.String} 
   * @memberof ContactBusinessPostalAddress
   */
  CountryCodeText

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ContactBusinessPostalAddress
   */
  ETag

  /**
   * @description House Number
   * @type {Edm.String} 
   * @memberof ContactBusinessPostalAddress
   */
  HouseNumber

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ContactBusinessPostalAddress
   */
  ObjectID

  /**
   * @description Postal Code
   * @type {Edm.String} 
   * @memberof ContactBusinessPostalAddress
   */
  PostalCode

  /**
   * @description PostalCodeText
   * @type {Edm.String} 
   * @memberof ContactBusinessPostalAddress
   */
  PostalCodeText

  /**
   * @description State
   * @type {Edm.String} 
   * @memberof ContactBusinessPostalAddress
   */
  State

  /**
   * @description StateText
   * @type {Edm.String} 
   * @memberof ContactBusinessPostalAddress
   */
  StateText

  /**
   * @description Street
   * @type {Edm.String} 
   * @memberof ContactBusinessPostalAddress
   */
  Street
}

export class ContactCommunicationData extends C4CODataType {

  /**
   * @description Building
   * @type {Edm.String} 
   * @memberof ContactCommunicationData
   */
  BuildingID

  /**
   * @description Department
   * @type {Edm.String} 
   * @memberof ContactCommunicationData
   */
  DepartmentFromBusinessCard

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof ContactCommunicationData
   */
  EMail

  /**
   * @description EMailInvalid
   * @type {Edm.Boolean} 
   * @memberof ContactCommunicationData
   */
  EMailInvalid

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ContactCommunicationData
   */
  ETag

  /**
   * @description Fax
   * @type {Edm.String} 
   * @memberof ContactCommunicationData
   */
  Fax

  /**
   * @description Floor
   * @type {Edm.String} 
   * @memberof ContactCommunicationData
   */
  FloorID

  /**
   * @description Function
   * @type {Edm.String} 
   * @memberof ContactCommunicationData
   */
  JobTitle

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof ContactCommunicationData
   */
  Mobile

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ContactCommunicationData
   */
  ObjectID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof ContactCommunicationData
   */
  Phone

  /**
   * @description Room
   * @type {Edm.String} 
   * @memberof ContactCommunicationData
   */
  RoomID

  /**
   * @type {AccountContactRelationship|AccountContactRelationship[]} 
   * @memberof ContactCommunicationData
   */
  AccountContactRelationship
}

export class ContactNotes extends C4CODataType {

  /**
   * @description Author Name
   * @type {Edm.String} 
   * @memberof ContactNotes
   */
  AuthorName

  /**
   * @description Author UUID
   * @type {Edm.Guid} 
   * @memberof ContactNotes
   */
  AuthorUUID

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof ContactNotes
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof ContactNotes
   */
  CreatedOn

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ContactNotes
   */
  ETag

  /**
   * @description Language Code
   * @type {Edm.String} 
   * @memberof ContactNotes
   */
  LanguageCode

  /**
   * @description LanguageCodeText
   * @type {Edm.String} 
   * @memberof ContactNotes
   */
  LanguageCodeText

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof ContactNotes
   */
  LastUpdatedBy

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ContactNotes
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof ContactNotes
   */
  ParentObjectID

  /**
   * @description Text
   * @type {Edm.String} 
   * @memberof ContactNotes
   */
  Text

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof ContactNotes
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof ContactNotes
   */
  TypeCodeText

  /**
   * @description Updated On
   * @type {Edm.DateTime} 
   * @memberof ContactNotes
   */
  UpdatedOn
}

export class ContactPersonalAddress extends C4CODataType {

  /**
   * @description Address Line 2
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  AdditionalStreetPrefixName

  /**
   * @description Address Line 5
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  AdditionalStreetSuffixName

  /**
   * @description Address
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  Address

  /**
   * @description City
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  City

  /**
   * @description Country
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  CountryCode

  /**
   * @description CountryCodeText
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  CountryCodeText

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  EMail

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ContactPersonalAddress
   */
  ETag

  /**
   * @description Fax
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  Fax

  /**
   * @description House Number
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  HouseNumber

  /**
   * @description Main Personal Address
   * @type {Edm.Boolean} 
   * @memberof ContactPersonalAddress
   */
  MainPersonalAddress

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  Mobile

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  ObjectID

  /**
   * @description P.O. Box
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  POBox

  /**
   * @description P.O. Box Postal Code
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  POBoxPostalCode

  /**
   * @description POBoxPostalCodeText
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  POBoxPostalCodeText

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  ParentObjectID

  /**
   * @description Mobile
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  Phone

  /**
   * @description Postal Code
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  PostalCode

  /**
   * @description PostalCodeText
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  PostalCodeText

  /**
   * @description State
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  State

  /**
   * @description StateText
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  StateText

  /**
   * @description Street
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  Street

  /**
   * @description Address Line 1
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  StreetPrefixName

  /**
   * @description Address Line 4
   * @type {Edm.String} 
   * @memberof ContactPersonalAddress
   */
  StreetSuffixName

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof ContactPersonalAddress
   */
  UUID

  /**
   * @type {Contact|Contact[]} 
   * @memberof ContactPersonalAddress
   */
  Contact

  /**
   * @type {ContactPersonalPostalAddress|ContactPersonalPostalAddress[]} 
   * @memberof ContactPersonalAddress
   */
  ContactPersonalPostalAddress
}

export class ContactPersonalPostalAddress extends C4CODataType {

  /**
   * @description Address Line 2
   * @type {Edm.String} 
   * @memberof ContactPersonalPostalAddress
   */
  AdditionalStreetPrefixName

  /**
   * @description Address Line 5
   * @type {Edm.String} 
   * @memberof ContactPersonalPostalAddress
   */
  AdditionalStreetSuffixName

  /**
   * @description City
   * @type {Edm.String} 
   * @memberof ContactPersonalPostalAddress
   */
  City

  /**
   * @description Country
   * @type {Edm.String} 
   * @memberof ContactPersonalPostalAddress
   */
  CountryCode

  /**
   * @description CountryCodeText
   * @type {Edm.String} 
   * @memberof ContactPersonalPostalAddress
   */
  CountryCodeText

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ContactPersonalPostalAddress
   */
  ETag

  /**
   * @description House Number
   * @type {Edm.String} 
   * @memberof ContactPersonalPostalAddress
   */
  HouseNumber

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ContactPersonalPostalAddress
   */
  ObjectID

  /**
   * @description P.O. Box
   * @type {Edm.String} 
   * @memberof ContactPersonalPostalAddress
   */
  POBox

  /**
   * @description P.O. Box Postal Code
   * @type {Edm.String} 
   * @memberof ContactPersonalPostalAddress
   */
  POBoxPostalCode

  /**
   * @description POBoxPostalCodeText
   * @type {Edm.String} 
   * @memberof ContactPersonalPostalAddress
   */
  POBoxPostalCodeText

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof ContactPersonalPostalAddress
   */
  ParentObjectID

  /**
   * @description Postal Code
   * @type {Edm.String} 
   * @memberof ContactPersonalPostalAddress
   */
  PostalCode

  /**
   * @description PostalCodeText
   * @type {Edm.String} 
   * @memberof ContactPersonalPostalAddress
   */
  PostalCodeText

  /**
   * @description State
   * @type {Edm.String} 
   * @memberof ContactPersonalPostalAddress
   */
  State

  /**
   * @description StateText
   * @type {Edm.String} 
   * @memberof ContactPersonalPostalAddress
   */
  StateText

  /**
   * @description Street
   * @type {Edm.String} 
   * @memberof ContactPersonalPostalAddress
   */
  Street

  /**
   * @description Address Line 1
   * @type {Edm.String} 
   * @memberof ContactPersonalPostalAddress
   */
  StreetPrefixName

  /**
   * @description Address Line 4
   * @type {Edm.String} 
   * @memberof ContactPersonalPostalAddress
   */
  StreetSuffixName

  /**
   * @type {ContactPersonalAddress|ContactPersonalAddress[]} 
   * @memberof ContactPersonalPostalAddress
   */
  ContactPersonalAddress
}

export class ContextualCodeList extends C4CODataType {

  /**
   * @description Code
   * @type {Edm.String} 
   * @memberof ContextualCodeList
   */
  Code

  /**
   * @description Context
   * @type {Edm.String} 
   * @memberof ContextualCodeList
   */
  Context

  /**
   * @description Description
   * @type {Edm.String} 
   * @memberof ContextualCodeList
   */
  Description
}

export class EMail extends C4CODataType {

  /**
   * @description Account ID
   * @type {Edm.String} 
   * @memberof EMail
   */
  AccountID

  /**
   * @description Account Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof EMail
   */
  AccountName

  /**
   * @description Account UUID
   * @type {Edm.Guid} 
   * @memberof EMail
   */
  AccountUUID

  /**
   * @description Status
   * @type {Edm.String} 
   * @memberof EMail
   */
  CorrespondenceTransmissionStatusCode

  /**
   * @description CorrespondenceTransmissionStatusCodeText
   * @type {Edm.String} 
   * @memberof EMail
   */
  CorrespondenceTransmissionStatusCodeText

  /**
   * @description Data Origin
   * @type {Edm.String} 
   * @memberof EMail
   */
  DataOriginTypeCode

  /**
   * @description DataOriginTypeCodeText
   * @type {Edm.String} 
   * @memberof EMail
   */
  DataOriginTypeCodeText

  /**
   * @description Transmitted Date/Time
   * @type {c4codata.LOCALNORMALISED_DateTime} 
   * @memberof EMail
   */
  DateTime

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof EMail
   */
  ETag

  /**
   * @description Category
   * @type {Edm.String} 
   * @memberof EMail
   */
  GroupCode

  /**
   * @description GroupCodeText
   * @type {Edm.String} 
   * @memberof EMail
   */
  GroupCodeText

  /**
   * @description Groupware Item ID
   * @type {Edm.String} 
   * @memberof EMail
   */
  GroupwareItemID

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof EMail
   */
  ID

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof EMail
   */
  MessageFromEmailURI

  /**
   * @description Message From Name
   * @type {Edm.String} 
   * @memberof EMail
   */
  MessageFromName

  /**
   * @description Message From Party ID
   * @type {Edm.String} 
   * @memberof EMail
   */
  MessageFromPartyID

  /**
   * @description Message From Party Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof EMail
   */
  MessageFromPartyName

  /**
   * @description Message From Party UUID
   * @type {Edm.Guid} 
   * @memberof EMail
   */
  MessageFromPartyUUID

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof EMail
   */
  ObjectID

  /**
   * @description Owner
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof EMail
   */
  OwnerName

  /**
   * @description Owner UUID
   * @type {Edm.Guid} 
   * @memberof EMail
   */
  OwnerUUID

  /**
   * @description Party ID
   * @type {Edm.String} 
   * @memberof EMail
   */
  PrimaryContactID

  /**
   * @description Primary Contact Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof EMail
   */
  PrimaryContactName

  /**
   * @description Primary Contact UUID
   * @type {Edm.Guid} 
   * @memberof EMail
   */
  PrimaryContactUUID

  /**
   * @description Priority
   * @type {Edm.String} 
   * @memberof EMail
   */
  PriorityCode

  /**
   * @description PriorityCodeText
   * @type {Edm.String} 
   * @memberof EMail
   */
  PriorityCodeText

  /**
   * @description Status
   * @type {Edm.String} 
   * @memberof EMail
   */
  StatusCode

  /**
   * @description StatusCodeText
   * @type {Edm.String} 
   * @memberof EMail
   */
  StatusCodeText

  /**
   * @description Subject
   * @type {Edm.String} 
   * @memberof EMail
   */
  SubjectName

  /**
   * @description Activity Type
   * @type {Edm.String} 
   * @memberof EMail
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof EMail
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof EMail
   */
  UUID

  /**
   * @type {EMailAttachment|EMailAttachment[]} 
   * @memberof EMail
   */
  EMailAttachment

  /**
   * @type {EMailCcRecipients|EMailCcRecipients[]} 
   * @memberof EMail
   */
  EMailCcRecipients

  /**
   * @type {EMailNotes|EMailNotes[]} 
   * @memberof EMail
   */
  EMailNotes

  /**
   * @type {EMailToRecipients|EMailToRecipients[]} 
   * @memberof EMail
   */
  EMailToRecipients

  /**
   * @type {EmailBusinessTransactionDocumentReference|EmailBusinessTransactionDocumentReference[]} 
   * @memberof EMail
   */
  EmailBusinessTransactionDocumentReference
}

export class EMailAttachment extends C4CODataType {

  /**
   * @description Binary
   * @type {Edm.Binary} 
   * @memberof EMailAttachment
   */
  Binary

  /**
   * @description Category Code
   * @type {Edm.String} 
   * @memberof EMailAttachment
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof EMailAttachment
   */
  CategoryCodeText

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof EMailAttachment
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof EMailAttachment
   */
  CreatedOn

  /**
   * @description Document Link
   * @type {Edm.String} 
   * @memberof EMailAttachment
   */
  DocumentLink

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof EMailAttachment
   */
  ETag

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof EMailAttachment
   */
  LastUpdatedBy

  /**
   * @description Last Updated On
   * @type {Edm.DateTime} 
   * @memberof EMailAttachment
   */
  LastUpdatedOn

  /**
   * @description Link Web URI
   * @type {Edm.String} 
   * @memberof EMailAttachment
   */
  LinkWebURI

  /**
   * @description Mime Type
   * @type {Edm.String} 
   * @memberof EMailAttachment
   */
  MimeType

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof EMailAttachment
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof EMailAttachment
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof EMailAttachment
   */
  ParentObjectID

  /**
   * @description Size In KiloBytes
   * @type {Edm.Decimal} 
   * @memberof EMailAttachment
   */
  SizeInkB

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof EMailAttachment
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof EMailAttachment
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof EMailAttachment
   */
  UUID
}

export class EMailCcRecipients extends C4CODataType {

  /**
   * @description Address
   * @type {Edm.String} 
   * @memberof EMailCcRecipients
   */
  Address

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof EMailCcRecipients
   */
  EMailID

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof EMailCcRecipients
   */
  ETag

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof EMailCcRecipients
   */
  MessageCCEMailID

  /**
   * @description Message CC Name
   * @type {Edm.String} 
   * @memberof EMailCcRecipients
   */
  MessageCCName

  /**
   * @description Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof EMailCcRecipients
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof EMailCcRecipients
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof EMailCcRecipients
   */
  ParentObjectID

  /**
   * @description Message CC Party ID
   * @type {Edm.String} 
   * @memberof EMailCcRecipients
   */
  PartyID

  /**
   * @description Message CC Party UUID
   * @type {Edm.Guid} 
   * @memberof EMailCcRecipients
   */
  PartyUUID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof EMailCcRecipients
   */
  Phone

  /**
   * @description RoleCategoryCode
   * @type {Edm.String} 
   * @memberof EMailCcRecipients
   */
  RoleCategoryCode

  /**
   * @description RoleCategoryCodeText
   * @type {Edm.String} 
   * @memberof EMailCcRecipients
   */
  RoleCategoryCodeText

  /**
   * @type {EMail|EMail[]} 
   * @memberof EMailCcRecipients
   */
  EMail
}

export class EMailNotes extends C4CODataType {

  /**
   * @description Author Name
   * @type {Edm.String} 
   * @memberof EMailNotes
   */
  AuthorName

  /**
   * @description Author UUID
   * @type {Edm.Guid} 
   * @memberof EMailNotes
   */
  AuthorUUID

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof EMailNotes
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof EMailNotes
   */
  CreatedOn

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof EMailNotes
   */
  ETag

  /**
   * @description Language Code
   * @type {Edm.String} 
   * @memberof EMailNotes
   */
  LanguageCode

  /**
   * @description LanguageCodeText
   * @type {Edm.String} 
   * @memberof EMailNotes
   */
  LanguageCodeText

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof EMailNotes
   */
  LastUpdatedBy

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof EMailNotes
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof EMailNotes
   */
  ParentObjectID

  /**
   * @description Text
   * @type {Edm.String} 
   * @memberof EMailNotes
   */
  Text

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof EMailNotes
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof EMailNotes
   */
  TypeCodeText

  /**
   * @description Updated On
   * @type {Edm.DateTime} 
   * @memberof EMailNotes
   */
  UpdatedOn
}

export class EMailToRecipients extends C4CODataType {

  /**
   * @description Address
   * @type {Edm.String} 
   * @memberof EMailToRecipients
   */
  Address

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof EMailToRecipients
   */
  EMailID

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof EMailToRecipients
   */
  ETag

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof EMailToRecipients
   */
  MessageToEmailID

  /**
   * @description Message To Name
   * @type {Edm.String} 
   * @memberof EMailToRecipients
   */
  MessageToName

  /**
   * @description Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof EMailToRecipients
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof EMailToRecipients
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof EMailToRecipients
   */
  ParentObjectID

  /**
   * @description Message To Party ID
   * @type {Edm.String} 
   * @memberof EMailToRecipients
   */
  PartyID

  /**
   * @description Message To Party UUID
   * @type {Edm.Guid} 
   * @memberof EMailToRecipients
   */
  PartyUUID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof EMailToRecipients
   */
  Phone

  /**
   * @description Role Category Code
   * @type {Edm.String} 
   * @memberof EMailToRecipients
   */
  RoleCategoryCode

  /**
   * @description RoleCategoryCodeText
   * @type {Edm.String} 
   * @memberof EMailToRecipients
   */
  RoleCategoryCodeText

  /**
   * @type {EMail|EMail[]} 
   * @memberof EMailToRecipients
   */
  EMail
}

export class EmailBusinessTransactionDocumentReference extends C4CODataType {

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof EmailBusinessTransactionDocumentReference
   */
  ETag

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof EmailBusinessTransactionDocumentReference
   */
  ID

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof EmailBusinessTransactionDocumentReference
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof EmailBusinessTransactionDocumentReference
   */
  ParentObjectID

  /**
   * @description Role Code
   * @type {Edm.String} 
   * @memberof EmailBusinessTransactionDocumentReference
   */
  RoleCode

  /**
   * @description RoleCodeText
   * @type {Edm.String} 
   * @memberof EmailBusinessTransactionDocumentReference
   */
  RoleCodeText

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof EmailBusinessTransactionDocumentReference
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof EmailBusinessTransactionDocumentReference
   */
  TypeCodeText

  /**
   * @type {EMail|EMail[]} 
   * @memberof EmailBusinessTransactionDocumentReference
   */
  EMail
}

export class Employee extends C4CODataType {

  /**
   * @description Academic Title
   * @type {Edm.String} 
   * @memberof Employee
   */
  AcademicTitleCode

  /**
   * @description AcademicTitleCodeText
   * @type {Edm.String} 
   * @memberof Employee
   */
  AcademicTitleCodeText

  /**
   * @description Address Line 1
   * @type {Edm.String} 
   * @memberof Employee
   */
  AddressLine1

  /**
   * @description Address Line 2
   * @type {Edm.String} 
   * @memberof Employee
   */
  AddressLine2

  /**
   * @description Address Line 4
   * @type {Edm.String} 
   * @memberof Employee
   */
  AddressLine4

  /**
   * @description Address Line 5
   * @type {Edm.String} 
   * @memberof Employee
   */
  AddressLine5

  /**
   * @description Date of Birth
   * @type {Edm.DateTime} 
   * @memberof Employee
   */
  BirthDate

  /**
   * @description Birth Name
   * @type {Edm.String} 
   * @memberof Employee
   */
  BirthName

  /**
   * @description Place of Birth
   * @type {Edm.String} 
   * @memberof Employee
   */
  BirthPlaceName

  /**
   * @description Building
   * @type {Edm.String} 
   * @memberof Employee
   */
  Building

  /**
   * @description c/o
   * @type {Edm.String} 
   * @memberof Employee
   */
  CareOfName

  /**
   * @description City
   * @type {Edm.String} 
   * @memberof Employee
   */
  City

  /**
   * @description Company Postal Code
   * @type {Edm.String} 
   * @memberof Employee
   */
  CompanyPostalCode

  /**
   * @description CompanyPostalCodeText
   * @type {Edm.String} 
   * @memberof Employee
   */
  CompanyPostalCodeText

  /**
   * @description Country
   * @type {Edm.String} 
   * @memberof Employee
   */
  CountryCode

  /**
   * @description CountryCodeText
   * @type {Edm.String} 
   * @memberof Employee
   */
  CountryCodeText

  /**
   * @description County
   * @type {Edm.String} 
   * @memberof Employee
   */
  County

  /**
   * @description Date Format
   * @type {Edm.String} 
   * @memberof Employee
   */
  DateFormatCode

  /**
   * @description DateFormatCodeText
   * @type {Edm.String} 
   * @memberof Employee
   */
  DateFormatCodeText

  /**
   * @description Decimal Format
   * @type {Edm.String} 
   * @memberof Employee
   */
  DecimalFormatCode

  /**
   * @description DecimalFormatCodeText
   * @type {Edm.String} 
   * @memberof Employee
   */
  DecimalFormatCodeText

  /**
   * @description Different City
   * @type {Edm.String} 
   * @memberof Employee
   */
  DifferentCity

  /**
   * @description District
   * @type {Edm.String} 
   * @memberof Employee
   */
  District

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof Employee
   */
  ETag

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof Employee
   */
  Email

  /**
   * @description Employee ID
   * @type {Edm.String} 
   * @memberof Employee
   */
  EmployeeID

  /**
   * @description Validity End Date
   * @type {Edm.DateTime} 
   * @memberof Employee
   */
  EndDate

  /**
   * @description Fax
   * @type {Edm.String} 
   * @memberof Employee
   */
  FaxNumber

  /**
   * @description First Name
   * @type {Edm.String} 
   * @memberof Employee
   */
  FirstName

  /**
   * @description Floor
   * @type {Edm.String} 
   * @memberof Employee
   */
  Floor

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof Employee
   */
  FormattedNumberDescription

  /**
   * @description Gender
   * @type {Edm.String} 
   * @memberof Employee
   */
  GenderCode

  /**
   * @description GenderCodeText
   * @type {Edm.String} 
   * @memberof Employee
   */
  GenderCodeText

  /**
   * @description House Number
   * @type {Edm.String} 
   * @memberof Employee
   */
  HouseNumber

  /**
   * @description In-House Mail
   * @type {Edm.String} 
   * @memberof Employee
   */
  InhouseMail

  /**
   * @description Internal Employee
   * @type {Edm.Boolean} 
   * @memberof Employee
   */
  InternalEmployeeIndicator

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof Employee
   */
  InternalID

  /**
   * @description Language
   * @type {Edm.String} 
   * @memberof Employee
   */
  LanguageCode

  /**
   * @description LanguageCodeText
   * @type {Edm.String} 
   * @memberof Employee
   */
  LanguageCodeText

  /**
   * @description Last Name
   * @type {Edm.String} 
   * @memberof Employee
   */
  LastName

  /**
   * @description Logon Language
   * @type {Edm.String} 
   * @memberof Employee
   */
  LogonLanguageCode

  /**
   * @description LogonLanguageCodeText
   * @type {Edm.String} 
   * @memberof Employee
   */
  LogonLanguageCodeText

  /**
   * @description Marital Status
   * @type {Edm.String} 
   * @memberof Employee
   */
  MaritalStatusCode

  /**
   * @description MaritalStatusCodeText
   * @type {Edm.String} 
   * @memberof Employee
   */
  MaritalStatusCodeText

  /**
   * @description Middle Name
   * @type {Edm.String} 
   * @memberof Employee
   */
  MiddleName

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof Employee
   */
  Name

  /**
   * @description Nationality
   * @type {Edm.String} 
   * @memberof Employee
   */
  NationalityCountryCode

  /**
   * @description NationalityCountryCodeText
   * @type {Edm.String} 
   * @memberof Employee
   */
  NationalityCountryCodeText

  /**
   * @description Nickname
   * @type {Edm.String} 
   * @memberof Employee
   */
  NickName

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof Employee
   */
  ObjectID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof Employee
   */
  OfficePhoneNumber

  /**
   * @description P.O. Box
   * @type {Edm.String} 
   * @memberof Employee
   */
  POBox

  /**
   * @description P.O. Box City
   * @type {Edm.String} 
   * @memberof Employee
   */
  POBoxCity

  /**
   * @description P.O. Box Country
   * @type {Edm.String} 
   * @memberof Employee
   */
  POBoxCountryCode

  /**
   * @description POBoxCountryCodeText
   * @type {Edm.String} 
   * @memberof Employee
   */
  POBoxCountryCodeText

  /**
   * @description P.O. Box Postal Code
   * @type {Edm.String} 
   * @memberof Employee
   */
  POBoxPostalCode

  /**
   * @description POBoxPostalCodeText
   * @type {Edm.String} 
   * @memberof Employee
   */
  POBoxPostalCodeText

  /**
   * @description P.O. Box State
   * @type {Edm.String} 
   * @memberof Employee
   */
  POBoxRegionCode

  /**
   * @description POBoxRegionCodeText
   * @type {Edm.String} 
   * @memberof Employee
   */
  POBoxRegionCodeText

  /**
   * @description Postal Code
   * @type {Edm.String} 
   * @memberof Employee
   */
  PostalCode

  /**
   * @description PostalCodeText
   * @type {Edm.String} 
   * @memberof Employee
   */
  PostalCodeText

  /**
   * @description State
   * @type {Edm.String} 
   * @memberof Employee
   */
  RegionCode

  /**
   * @description RegionCodeText
   * @type {Edm.String} 
   * @memberof Employee
   */
  RegionCodeText

  /**
   * @description Room
   * @type {Edm.String} 
   * @memberof Employee
   */
  Room

  /**
   * @description Second Last Name
   * @type {Edm.String} 
   * @memberof Employee
   */
  SecondLastName

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof Employee
   */
  SortingName

  /**
   * @description Validity Start Date
   * @type {Edm.DateTime} 
   * @memberof Employee
   */
  StartDate

  /**
   * @description Street
   * @type {Edm.String} 
   * @memberof Employee
   */
  Street

  /**
   * @description Tax Jurisdiction Code
   * @type {Edm.String} 
   * @memberof Employee
   */
  TaxJurisdictionCode

  /**
   * @description TaxJurisdictionCodeText
   * @type {Edm.String} 
   * @memberof Employee
   */
  TaxJurisdictionCodeText

  /**
   * @description Time Format
   * @type {Edm.String} 
   * @memberof Employee
   */
  TimeFormatCode

  /**
   * @description TimeFormatCodeText
   * @type {Edm.String} 
   * @memberof Employee
   */
  TimeFormatCodeText

  /**
   * @description Time Zone
   * @type {Edm.String} 
   * @memberof Employee
   */
  TimeZoneCode

  /**
   * @description TimeZoneCodeText
   * @type {Edm.String} 
   * @memberof Employee
   */
  TimeZoneCodeText

  /**
   * @description Title
   * @type {Edm.String} 
   * @memberof Employee
   */
  TitleCode

  /**
   * @description TitleCodeText
   * @type {Edm.String} 
   * @memberof Employee
   */
  TitleCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof Employee
   */
  UUID

  /**
   * @description User ID
   * @type {Edm.String} 
   * @memberof Employee
   */
  UserID

  /**
   * @description User Password Policy
   * @type {Edm.String} 
   * @memberof Employee
   */
  UserPasswordPolicyCode

  /**
   * @description UserPasswordPolicyCodeText
   * @type {Edm.String} 
   * @memberof Employee
   */
  UserPasswordPolicyCodeText

  /**
   * @description User Validity End Date
   * @type {Edm.DateTime} 
   * @memberof Employee
   */
  UserValidityEndDate

  /**
   * @description User Validity Start Date
   * @type {Edm.DateTime} 
   * @memberof Employee
   */
  UserValidityStartDate

  /**
   * @type {EmployeeBusinessAddress|EmployeeBusinessAddress[]} 
   * @memberof Employee
   */
  EmployeeBusinessAddress

  /**
   * @type {EmployeeCommunicationData|EmployeeCommunicationData[]} 
   * @memberof Employee
   */
  EmployeeCommunicationData
}

export class EmployeeBusinessAddress extends C4CODataType {

  /**
   * @description City
   * @type {Edm.String} 
   * @memberof EmployeeBusinessAddress
   */
  City

  /**
   * @description Country
   * @type {Edm.String} 
   * @memberof EmployeeBusinessAddress
   */
  CountryCode

  /**
   * @description CountryCodeText
   * @type {Edm.String} 
   * @memberof EmployeeBusinessAddress
   */
  CountryCodeText

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof EmployeeBusinessAddress
   */
  ETag

  /**
   * @description House Number
   * @type {Edm.String} 
   * @memberof EmployeeBusinessAddress
   */
  HouseNumber

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof EmployeeBusinessAddress
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof EmployeeBusinessAddress
   */
  ParentObjectID

  /**
   * @description Postal Code
   * @type {Edm.String} 
   * @memberof EmployeeBusinessAddress
   */
  PostalCode

  /**
   * @description PostalCodeText
   * @type {Edm.String} 
   * @memberof EmployeeBusinessAddress
   */
  PostalCodeText

  /**
   * @description State
   * @type {Edm.String} 
   * @memberof EmployeeBusinessAddress
   */
  StateCode

  /**
   * @description StateCodeText
   * @type {Edm.String} 
   * @memberof EmployeeBusinessAddress
   */
  StateCodeText

  /**
   * @description Street
   * @type {Edm.String} 
   * @memberof EmployeeBusinessAddress
   */
  Street

  /**
   * @type {Employee|Employee[]} 
   * @memberof EmployeeBusinessAddress
   */
  Employee

  /**
   * @type {EmployeeFormattedBusinessAddress|EmployeeFormattedBusinessAddress[]} 
   * @memberof EmployeeBusinessAddress
   */
  EmployeeFormattedBusinessAddress
}

export class EmployeeCommunicationData extends C4CODataType {

  /**
   * @description Building
   * @type {Edm.String} 
   * @memberof EmployeeCommunicationData
   */
  Building

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof EmployeeCommunicationData
   */
  EMail

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof EmployeeCommunicationData
   */
  ETag

  /**
   * @description Fax
   * @type {Edm.String} 
   * @memberof EmployeeCommunicationData
   */
  Fax

  /**
   * @description Floor
   * @type {Edm.String} 
   * @memberof EmployeeCommunicationData
   */
  Floor

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof EmployeeCommunicationData
   */
  Mobile

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof EmployeeCommunicationData
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof EmployeeCommunicationData
   */
  ParentObjectID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof EmployeeCommunicationData
   */
  Phone

  /**
   * @description Room
   * @type {Edm.String} 
   * @memberof EmployeeCommunicationData
   */
  Room

  /**
   * @type {Employee|Employee[]} 
   * @memberof EmployeeCommunicationData
   */
  Employee
}

export class EmployeeFormattedBusinessAddress extends C4CODataType {

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof EmployeeFormattedBusinessAddress
   */
  ETag

  /**
   * @description Address
   * @type {Edm.String} 
   * @memberof EmployeeFormattedBusinessAddress
   */
  FormattedAddress

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof EmployeeFormattedBusinessAddress
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof EmployeeFormattedBusinessAddress
   */
  ParentObjectID

  /**
   * @type {EmployeeBusinessAddress|EmployeeBusinessAddress[]} 
   * @memberof EmployeeFormattedBusinessAddress
   */
  EmployeeBusinessAddress
}

export class EmployeeValueHelp extends C4CODataType {

  /**
   * @description EMail
   * @type {Edm.String} 
   * @memberof EmployeeValueHelp
   */
  EMail

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof EmployeeValueHelp
   */
  ETag

  /**
   * @description Employee ID
   * @type {Edm.String} 
   * @memberof EmployeeValueHelp
   */
  EmployeeID

  /**
   * @description First Name
   * @type {Edm.String} 
   * @memberof EmployeeValueHelp
   */
  FirstName

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof EmployeeValueHelp
   */
  FormattedName

  /**
   * @description Address
   * @type {Edm.String} 
   * @memberof EmployeeValueHelp
   */
  FormattedPostalAddress

  /**
   * @description Internal ID
   * @type {Edm.String} 
   * @memberof EmployeeValueHelp
   */
  InternalID

  /**
   * @description Last Name
   * @type {Edm.String} 
   * @memberof EmployeeValueHelp
   */
  LastName

  /**
   * @description Middle Name
   * @type {Edm.String} 
   * @memberof EmployeeValueHelp
   */
  MiddleName

  /**
   * @description Nick Name
   * @type {Edm.String} 
   * @memberof EmployeeValueHelp
   */
  NickName

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof EmployeeValueHelp
   */
  ObjectID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof EmployeeValueHelp
   */
  Phone
}

export class ExternalIDMapping extends C4CODataType {

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ExternalIDMapping
   */
  ETag

  /**
   * @description ExternalID
   * @type {Edm.String} 
   * @memberof ExternalIDMapping
   */
  ExternalID

  /**
   * @description ExternalIDSchemeCode
   * @type {Edm.String} 
   * @memberof ExternalIDMapping
   */
  ExternalIDSchemeCode

  /**
   * @description ExternalIDSchemeCodeText
   * @type {Edm.String} 
   * @memberof ExternalIDMapping
   */
  ExternalIDSchemeCodeText

  /**
   * @description ExternalSystemID
   * @type {Edm.String} 
   * @memberof ExternalIDMapping
   */
  ExternalSystemID

  /**
   * @description ExternalSystemUUID
   * @type {Edm.Guid} 
   * @memberof ExternalIDMapping
   */
  ExternalSystemUUID

  /**
   * @description InternalUUID
   * @type {Edm.Guid} 
   * @memberof ExternalIDMapping
   */
  InternalUUID

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ExternalIDMapping
   */
  ObjectID

  /**
   * @description ObjectTypeCode
   * @type {Edm.String} 
   * @memberof ExternalIDMapping
   */
  ObjectTypeCode

  /**
   * @description ObjectTypeCodeText
   * @type {Edm.String} 
   * @memberof ExternalIDMapping
   */
  ObjectTypeCodeText
}

export class IndividualCustomer extends C4CODataType {

  /**
   * @description ABC Classification
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  ABCClassificationCode

  /**
   * @description ABCClassificationCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  ABCClassificationCodeText

  /**
   * @description Academic Title
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  AcademicTitleCode

  /**
   * @description AcademicTitleCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  AcademicTitleCodeText

  /**
   * @description Address Line 2
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  AdditionalStreetPrefixName

  /**
   * @description Address Line 5
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  AdditionalStreetSuffixName

  /**
   * @description Billing Block
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  BillingBlockCode

  /**
   * @description BillingBlockCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  BillingBlockCodeText

  /**
   * @description Birth Date Protected
   * @type {Edm.Boolean} 
   * @memberof IndividualCustomer
   */
  BirthDateProtectedIndicator

  /**
   * @description Building
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  BuildingID

  /**
   * @description c/o
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  CareOfName

  /**
   * @description Category
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  CategoryCodeText

  /**
   * @description Changed By
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  ChangedBy

  /**
   * @description Changed On
   * @type {Edm.DateTimeOffset} 
   * @memberof IndividualCustomer
   */
  ChangedOn

  /**
   * @description City
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  CityName

  /**
   * @description Company Postal Code
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  CompanyPostalCode

  /**
   * @description CompanyPostalCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  CompanyPostalCodeText

  /**
   * @description Contact Permission
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  ContactPermissionCode

  /**
   * @description ContactPermissionCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  ContactPermissionCodeText

  /**
   * @description Language
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  CorrespondenceLanguageCode

  /**
   * @description CorrespondenceLanguageCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  CorrespondenceLanguageCodeText

  /**
   * @description Country
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  CountryCode

  /**
   * @description CountryCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  CountryCodeText

  /**
   * @description County
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  CountyName

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTimeOffset} 
   * @memberof IndividualCustomer
   */
  CreationOn

  /**
   * @description Customer ID
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  CustomerID

  /**
   * @description Date of Birth
   * @type {Edm.DateTime} 
   * @memberof IndividualCustomer
   */
  DateOfBirth

  /**
   * @description Delivery Block
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  DeliveryBlockCode

  /**
   * @description DeliveryBlockCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  DeliveryBlockCodeText

  /**
   * @description District
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  DistrictName

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  EMail

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof IndividualCustomer
   */
  ETag

  /**
   * @description Valid To
   * @type {Edm.DateTime} 
   * @memberof IndividualCustomer
   */
  EndDate

  /**
   * @description Fax
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  Fax

  /**
   * @description First Name
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  FirstName

  /**
   * @description Gender
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  GenderCode

  /**
   * @description GenderCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  GenderCodeText

  /**
   * @description House Number
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  HouseID

  /**
   * @description Initials
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  Initials

  /**
   * @description Language
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  LanguageCode

  /**
   * @description LanguageCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  LanguageCodeText

  /**
   * @description Last Name
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  LastName

  /**
   * @description Marital Status
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  MaritalStatusCode

  /**
   * @description MaritalStatusCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  MaritalStatusCodeText

  /**
   * @description Marital Status
   * @type {Edm.Boolean} 
   * @memberof IndividualCustomer
   */
  MaritalStatusProtectedIndicator

  /**
   * @description Marketing Lead
   * @type {Edm.Boolean} 
   * @memberof IndividualCustomer
   */
  MarketingLeadIndicator

  /**
   * @description Middle Name
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  MiddleName

  /**
   * @description Mobile
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  Mobile

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  Name

  /**
   * @description Nationality
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  NationalityCode

  /**
   * @description NationalityCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  NationalityCodeText

  /**
   * @description Nickname
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  NickName

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  ObjectID

  /**
   * @description Order Block
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  OrderBlockCode

  /**
   * @description OrderBlockCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  OrderBlockCodeText

  /**
   * @description Owner Name
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  Owner

  /**
   * @description Owner ID
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  OwnerID

  /**
   * @description Owner
   * @type {Edm.Guid} 
   * @memberof IndividualCustomer
   */
  OwnerUUID

  /**
   * @description P.O. Box City
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  POBoxDeviatingCityName

  /**
   * @description P.O. Box Country
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  POBoxDeviatingCountryCode

  /**
   * @description POBoxDeviatingCountryCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  POBoxDeviatingCountryCodeText

  /**
   * @description P.O. Box State
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  POBoxDeviatingRegionCode

  /**
   * @description POBoxDeviatingRegionCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  POBoxDeviatingRegionCodeText

  /**
   * @description P.O. Box
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  POBoxID

  /**
   * @description P.O. Box Postal Code
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  POBoxPostalCode

  /**
   * @description POBoxPostalCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  POBoxPostalCodeText

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  Phone

  /**
   * @description Best Reached By
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  PreferredCommunicationMediumTypeCode

  /**
   * @description PreferredCommunicationMediumTypeCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  PreferredCommunicationMediumTypeCodeText

  /**
   * @description Prefix
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  PrefixCode

  /**
   * @description PrefixCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  PrefixCodeText

  /**
   * @description Profession
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  ProfessionCode

  /**
   * @description ProfessionCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  ProfessionCodeText

  /**
   * @description State
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  RegionCode

  /**
   * @description RegionCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  RegionCodeText

  /**
   * @description Role
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  RoleCode

  /**
   * @description RoleCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  RoleCodeText

  /**
   * @description Sales Support Block
   * @type {Edm.Boolean} 
   * @memberof IndividualCustomer
   */
  SalesSupportBlock

  /**
   * @description Valid From
   * @type {Edm.DateTime} 
   * @memberof IndividualCustomer
   */
  StartDate

  /**
   * @description Status
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  StatusCode

  /**
   * @description StatusCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  StatusCodeText

  /**
   * @description Street
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  StreetName

  /**
   * @description Postal Code
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  StreetPostalCode

  /**
   * @description StreetPostalCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  StreetPostalCodeText

  /**
   * @description Address Line 1
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  StreetPrefixName

  /**
   * @description Address Line 4
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  StreetSuffixName

  /**
   * @description Tax Jurisdiction Code
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  TaxJurisdictionCode

  /**
   * @description TaxJurisdictionCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  TaxJurisdictionCodeText

  /**
   * @description Time Zone
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  TimeZoneCode

  /**
   * @description TimeZoneCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  TimeZoneCodeText

  /**
   * @description Title
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  TitleCode

  /**
   * @description TitleCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  TitleCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof IndividualCustomer
   */
  UUID

  /**
   * @description Web Site
   * @type {Edm.String} 
   * @memberof IndividualCustomer
   */
  Web

  /**
   * @type {IndividualCustomerAttachment|IndividualCustomerAttachment[]} 
   * @memberof IndividualCustomer
   */
  IndividualCustomerAttachment

  /**
   * @type {IndividualCustomerCommon|IndividualCustomerCommon[]} 
   * @memberof IndividualCustomer
   */
  IndividualCustomerCommon

  /**
   * @type {IndividualCustomerNotes|IndividualCustomerNotes[]} 
   * @memberof IndividualCustomer
   */
  IndividualCustomerNotes
}

export class IndividualCustomerAttachment extends C4CODataType {

  /**
   * @description Binary
   * @type {Edm.Binary} 
   * @memberof IndividualCustomerAttachment
   */
  Binary

  /**
   * @description Category Code
   * @type {Edm.String} 
   * @memberof IndividualCustomerAttachment
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomerAttachment
   */
  CategoryCodeText

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof IndividualCustomerAttachment
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof IndividualCustomerAttachment
   */
  CreatedOn

  /**
   * @description Document Link
   * @type {Edm.String} 
   * @memberof IndividualCustomerAttachment
   */
  DocumentLink

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof IndividualCustomerAttachment
   */
  ETag

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof IndividualCustomerAttachment
   */
  LastUpdatedBy

  /**
   * @description Last Updated On
   * @type {Edm.DateTime} 
   * @memberof IndividualCustomerAttachment
   */
  LastUpdatedOn

  /**
   * @description Link Web URI
   * @type {Edm.String} 
   * @memberof IndividualCustomerAttachment
   */
  LinkWebURI

  /**
   * @description Mime Type
   * @type {Edm.String} 
   * @memberof IndividualCustomerAttachment
   */
  MimeType

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof IndividualCustomerAttachment
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof IndividualCustomerAttachment
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof IndividualCustomerAttachment
   */
  ParentObjectID

  /**
   * @description Size In KiloBytes
   * @type {Edm.Decimal} 
   * @memberof IndividualCustomerAttachment
   */
  SizeInkB

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof IndividualCustomerAttachment
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomerAttachment
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof IndividualCustomerAttachment
   */
  UUID
}

export class IndividualCustomerCommon extends C4CODataType {

  /**
   * @description AcademicTitleCode
   * @type {Edm.String} 
   * @memberof IndividualCustomerCommon
   */
  AcademicTitleCode

  /**
   * @description AcademicTitleCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomerCommon
   */
  AcademicTitleCodeText

  /**
   * @description BirthDate
   * @type {Edm.DateTime} 
   * @memberof IndividualCustomerCommon
   */
  BirthDate

  /**
   * @description BirthDateProtectedIndicator
   * @type {Edm.Boolean} 
   * @memberof IndividualCustomerCommon
   */
  BirthDateProtectedIndicator

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof IndividualCustomerCommon
   */
  ETag

  /**
   * @description Valid To
   * @type {Edm.DateTime} 
   * @memberof IndividualCustomerCommon
   */
  EndDate

  /**
   * @description FamilyName
   * @type {Edm.String} 
   * @memberof IndividualCustomerCommon
   */
  FamilyName

  /**
   * @description GenderCode
   * @type {Edm.String} 
   * @memberof IndividualCustomerCommon
   */
  GenderCode

  /**
   * @description GenderCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomerCommon
   */
  GenderCodeText

  /**
   * @description GivenName
   * @type {Edm.String} 
   * @memberof IndividualCustomerCommon
   */
  GivenName

  /**
   * @description Marital Status
   * @type {Edm.String} 
   * @memberof IndividualCustomerCommon
   */
  MaritalStatusCode

  /**
   * @description MaritalStatusCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomerCommon
   */
  MaritalStatusCodeText

  /**
   * @description MaritalStatusProtectedIndicator
   * @type {Edm.Boolean} 
   * @memberof IndividualCustomerCommon
   */
  MaritalStatusProtectedIndicator

  /**
   * @description MiddleName
   * @type {Edm.String} 
   * @memberof IndividualCustomerCommon
   */
  MiddleName

  /**
   * @description Nationality
   * @type {Edm.String} 
   * @memberof IndividualCustomerCommon
   */
  NationalityCountryCode

  /**
   * @description NationalityCountryCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomerCommon
   */
  NationalityCountryCodeText

  /**
   * @description NonVerbalCommunicationLanguageCode
   * @type {Edm.String} 
   * @memberof IndividualCustomerCommon
   */
  NonVerbalCommunicationLanguageCode

  /**
   * @description NonVerbalCommunicationLanguageCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomerCommon
   */
  NonVerbalCommunicationLanguageCodeText

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof IndividualCustomerCommon
   */
  ObjectID

  /**
   * @description OccupationCode
   * @type {Edm.String} 
   * @memberof IndividualCustomerCommon
   */
  OccupationCode

  /**
   * @description OccupationCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomerCommon
   */
  OccupationCodeText

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof IndividualCustomerCommon
   */
  ParentObjectID

  /**
   * @description Valid From
   * @type {Edm.DateTime} 
   * @memberof IndividualCustomerCommon
   */
  StartDate

  /**
   * @type {IndividualCustomer|IndividualCustomer[]} 
   * @memberof IndividualCustomerCommon
   */
  IndividualCustomer
}

export class IndividualCustomerNotes extends C4CODataType {

  /**
   * @description Author Name
   * @type {Edm.String} 
   * @memberof IndividualCustomerNotes
   */
  AuthorName

  /**
   * @description Author UUID
   * @type {Edm.Guid} 
   * @memberof IndividualCustomerNotes
   */
  AuthorUUID

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof IndividualCustomerNotes
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof IndividualCustomerNotes
   */
  CreatedOn

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof IndividualCustomerNotes
   */
  ETag

  /**
   * @description Language Code
   * @type {Edm.String} 
   * @memberof IndividualCustomerNotes
   */
  LanguageCode

  /**
   * @description LanguageCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomerNotes
   */
  LanguageCodeText

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof IndividualCustomerNotes
   */
  LastUpdatedBy

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof IndividualCustomerNotes
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof IndividualCustomerNotes
   */
  ParentObjectID

  /**
   * @description Text
   * @type {Edm.String} 
   * @memberof IndividualCustomerNotes
   */
  Text

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof IndividualCustomerNotes
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof IndividualCustomerNotes
   */
  TypeCodeText

  /**
   * @description Updated On
   * @type {Edm.DateTime} 
   * @memberof IndividualCustomerNotes
   */
  UpdatedOn
}

export class Lead extends C4CODataType {

  /**
   * @description AccountID
   * @type {Edm.String} 
   * @memberof Lead
   */
  AccountID

  /**
   * @description AccountName
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof Lead
   */
  AccountName

  /**
   * @description AccountUUID
   * @type {Edm.Guid} 
   * @memberof Lead
   */
  AccountUUID

  /**
   * @description Category
   * @type {Edm.String} 
   * @memberof Lead
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof Lead
   */
  CategoryCodeText

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof Lead
   */
  ChangedBy

  /**
   * @description ChangedByUUID
   * @type {Edm.Guid} 
   * @memberof Lead
   */
  ChangedByUUID

  /**
   * @description ChangedOn
   * @type {Edm.DateTimeOffset} 
   * @memberof Lead
   */
  ChangedOn

  /**
   * @description ConversionStatusCode
   * @type {Edm.String} 
   * @memberof Lead
   */
  ConversionStatusCode

  /**
   * @description ConversionStatusCodeText
   * @type {Edm.String} 
   * @memberof Lead
   */
  ConversionStatusCodeText

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof Lead
   */
  CreatedBy

  /**
   * @description CreatedByUUID
   * @type {Edm.Guid} 
   * @memberof Lead
   */
  CreatedByUUID

  /**
   * @description CreatedOn
   * @type {Edm.DateTimeOffset} 
   * @memberof Lead
   */
  CreatedOn

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof Lead
   */
  ETag

  /**
   * @description End Date
   * @type {Edm.DateTime} 
   * @memberof Lead
   */
  EndDate

  /**
   * @description LeadConsistencyCode
   * @type {Edm.String} 
   * @memberof Lead
   */
  LeadConsistencyCode

  /**
   * @description LeadConsistencyCodeText
   * @type {Edm.String} 
   * @memberof Lead
   */
  LeadConsistencyCodeText

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof Lead
   */
  LeadID

  /**
   * @description MarketingOwnerFormattedName
   * @type {Edm.String} 
   * @memberof Lead
   */
  MarketingOwnerFormattedName

  /**
   * @description MarketingOwnerID
   * @type {Edm.String} 
   * @memberof Lead
   */
  MarketingOwnerID

  /**
   * @description MarketingOwnerUUID
   * @type {Edm.Guid} 
   * @memberof Lead
   */
  MarketingOwnerUUID

  /**
   * @description MarketingUnitFormattedName
   * @type {Edm.String} 
   * @memberof Lead
   */
  MarketingUnitFormattedName

  /**
   * @description MarketingUnitUUID
   * @type {Edm.Guid} 
   * @memberof Lead
   */
  MarketingUnitUUID

  /**
   * @description Name
   * @type {c4codata.EXTENDED_Name} 
   * @memberof Lead
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof Lead
   */
  ObjectID

  /**
   * @description PrimaryContactFormattedName
   * @type {Edm.String} 
   * @memberof Lead
   */
  PrimaryContactFormattedName

  /**
   * @description PrimaryContactUUID
   * @type {Edm.Guid} 
   * @memberof Lead
   */
  PrimaryContactUUID

  /**
   * @description PriorityCode
   * @type {Edm.String} 
   * @memberof Lead
   */
  PriorityCode

  /**
   * @description PriorityCodeText
   * @type {Edm.String} 
   * @memberof Lead
   */
  PriorityCodeText

  /**
   * @description ProcessingDatePeriod
   * @type {c4codata.CLOSED_DatePeriod} 
   * @memberof Lead
   */
  ProcessingDatePeriod

  /**
   * @description Qualification
   * @type {Edm.String} 
   * @memberof Lead
   */
  QualificationLevelCode

  /**
   * @description QualificationLevelCodeText
   * @type {Edm.String} 
   * @memberof Lead
   */
  QualificationLevelCodeText

  /**
   * @description ReasonForStatusCode
   * @type {Edm.String} 
   * @memberof Lead
   */
  ReasonForStatusCode

  /**
   * @description ReasonForStatusCodeText
   * @type {Edm.String} 
   * @memberof Lead
   */
  ReasonForStatusCodeText

  /**
   * @description SalesOwnerFormattedName
   * @type {Edm.String} 
   * @memberof Lead
   */
  SalesOwnerFormattedName

  /**
   * @description SalesOwnerID
   * @type {Edm.String} 
   * @memberof Lead
   */
  SalesOwnerID

  /**
   * @description SalesOwnerUUID
   * @type {Edm.Guid} 
   * @memberof Lead
   */
  SalesOwnerUUID

  /**
   * @description SalesTerritoryID
   * @type {Edm.String} 
   * @memberof Lead
   */
  SalesTerritoryID

  /**
   * @description SalesTerritoryUUID
   * @type {Edm.Guid} 
   * @memberof Lead
   */
  SalesTerritoryUUID

  /**
   * @description SalesUnitFormattedName
   * @type {Edm.String} 
   * @memberof Lead
   */
  SalesUnitFormattedName

  /**
   * @description SalesUnitUUID
   * @type {Edm.Guid} 
   * @memberof Lead
   */
  SalesUnitUUID

  /**
   * @description Source
   * @type {Edm.String} 
   * @memberof Lead
   */
  SourceCode

  /**
   * @description SourceCodeText
   * @type {Edm.String} 
   * @memberof Lead
   */
  SourceCodeText

  /**
   * @description Start Date
   * @type {Edm.DateTime} 
   * @memberof Lead
   */
  StartDate

  /**
   * @description Status
   * @type {Edm.String} 
   * @memberof Lead
   */
  StatusCode

  /**
   * @description StatusCodeText
   * @type {Edm.String} 
   * @memberof Lead
   */
  StatusCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof Lead
   */
  UUID

  /**
   * @type {LeadAttachment|LeadAttachment[]} 
   * @memberof Lead
   */
  LeadAttachment

  /**
   * @type {LeadBusinessDocumentReference|LeadBusinessDocumentReference[]} 
   * @memberof Lead
   */
  LeadBusinessDocumentReference

  /**
   * @type {LeadInvolvedParties|LeadInvolvedParties[]} 
   * @memberof Lead
   */
  LeadInvolvedParties

  /**
   * @type {LeadProduct|LeadProduct[]} 
   * @memberof Lead
   */
  LeadProduct

  /**
   * @type {LeadSalesAndMarketingTeam|LeadSalesAndMarketingTeam[]} 
   * @memberof Lead
   */
  LeadSalesAndMarketingTeam
}

export class LeadAttachment extends C4CODataType {

  /**
   * @description Binary
   * @type {Edm.Binary} 
   * @memberof LeadAttachment
   */
  Binary

  /**
   * @description Category Code
   * @type {Edm.String} 
   * @memberof LeadAttachment
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof LeadAttachment
   */
  CategoryCodeText

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof LeadAttachment
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof LeadAttachment
   */
  CreatedOn

  /**
   * @description Document Link
   * @type {Edm.String} 
   * @memberof LeadAttachment
   */
  DocumentLink

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof LeadAttachment
   */
  ETag

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof LeadAttachment
   */
  LastUpdatedBy

  /**
   * @description Last Updated On
   * @type {Edm.DateTime} 
   * @memberof LeadAttachment
   */
  LastUpdatedOn

  /**
   * @description Link Web URI
   * @type {Edm.String} 
   * @memberof LeadAttachment
   */
  LinkWebURI

  /**
   * @description Mime Type
   * @type {Edm.String} 
   * @memberof LeadAttachment
   */
  MimeType

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof LeadAttachment
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof LeadAttachment
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof LeadAttachment
   */
  ParentObjectID

  /**
   * @description Size In KiloBytes
   * @type {Edm.Decimal} 
   * @memberof LeadAttachment
   */
  SizeInkB

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof LeadAttachment
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof LeadAttachment
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof LeadAttachment
   */
  UUID
}

export class LeadBusinessDocumentReference extends C4CODataType {

  /**
   * @description BusinessTransactionDocumentRelationshipRoleCode
   * @type {Edm.String} 
   * @memberof LeadBusinessDocumentReference
   */
  BusinessTransactionDocumentRelationshipRoleCode

  /**
   * @description BusinessTransactionDocumentRelationshipRoleCodeText
   * @type {Edm.String} 
   * @memberof LeadBusinessDocumentReference
   */
  BusinessTransactionDocumentRelationshipRoleCodeText

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof LeadBusinessDocumentReference
   */
  ETag

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof LeadBusinessDocumentReference
   */
  ID

  /**
   * @description ItemID
   * @type {Edm.String} 
   * @memberof LeadBusinessDocumentReference
   */
  ItemID

  /**
   * @description ItemTypeCode
   * @type {Edm.String} 
   * @memberof LeadBusinessDocumentReference
   */
  ItemTypeCode

  /**
   * @description ItemTypeCodeText
   * @type {Edm.String} 
   * @memberof LeadBusinessDocumentReference
   */
  ItemTypeCodeText

  /**
   * @description ItemUUID
   * @type {Edm.Guid} 
   * @memberof LeadBusinessDocumentReference
   */
  ItemUUID

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof LeadBusinessDocumentReference
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof LeadBusinessDocumentReference
   */
  ParentObjectID

  /**
   * @description TypeCode
   * @type {Edm.String} 
   * @memberof LeadBusinessDocumentReference
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof LeadBusinessDocumentReference
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof LeadBusinessDocumentReference
   */
  UUID

  /**
   * @type {Appointment|Appointment[]} 
   * @memberof LeadBusinessDocumentReference
   */
  Appointment

  /**
   * @type {EMail|EMail[]} 
   * @memberof LeadBusinessDocumentReference
   */
  EMail

  /**
   * @type {Lead|Lead[]} 
   * @memberof LeadBusinessDocumentReference
   */
  Lead

  /**
   * @type {Opportunity|Opportunity[]} 
   * @memberof LeadBusinessDocumentReference
   */
  Opportunity

  /**
   * @type {PhoneCall|PhoneCall[]} 
   * @memberof LeadBusinessDocumentReference
   */
  PhoneCall

  /**
   * @type {Task|Task[]} 
   * @memberof LeadBusinessDocumentReference
   */
  Task
}

export class LeadInvolvedParties extends C4CODataType {

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof LeadInvolvedParties
   */
  EMail

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof LeadInvolvedParties
   */
  ETag

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof LeadInvolvedParties
   */
  Mobile

  /**
   * @description Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof LeadInvolvedParties
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof LeadInvolvedParties
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof LeadInvolvedParties
   */
  ParentObjectID

  /**
   * @description PartyID
   * @type {Edm.String} 
   * @memberof LeadInvolvedParties
   */
  PartyID

  /**
   * @description PartyUUID
   * @type {Edm.Guid} 
   * @memberof LeadInvolvedParties
   */
  PartyUUID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof LeadInvolvedParties
   */
  Phone

  /**
   * @description Main
   * @type {Edm.Boolean} 
   * @memberof LeadInvolvedParties
   */
  Primary

  /**
   * @description PrimaryContactID
   * @type {Edm.String} 
   * @memberof LeadInvolvedParties
   */
  PrimaryContactID

  /**
   * @description PrimaryContactName
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof LeadInvolvedParties
   */
  PrimaryContactName

  /**
   * @description PrimaryContactUUID
   * @type {Edm.Guid} 
   * @memberof LeadInvolvedParties
   */
  PrimaryContactUUID

  /**
   * @description RoleCode
   * @type {Edm.String} 
   * @memberof LeadInvolvedParties
   */
  RoleCode

  /**
   * @description RoleCodeText
   * @type {Edm.String} 
   * @memberof LeadInvolvedParties
   */
  RoleCodeText

  /**
   * @type {Lead|Lead[]} 
   * @memberof LeadInvolvedParties
   */
  Lead
}

export class LeadProduct extends C4CODataType {

  /**
   * @description Category
   * @type {c4codata.MEDIUM_Description} 
   * @memberof LeadProduct
   */
  Category

  /**
   * @description CategoryID
   * @type {Edm.String} 
   * @memberof LeadProduct
   */
  CategoryID

  /**
   * @description Description
   * @type {c4codata.SHORT_Description} 
   * @memberof LeadProduct
   */
  Description

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof LeadProduct
   */
  ETag

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof LeadProduct
   */
  ID

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof LeadProduct
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof LeadProduct
   */
  ParentObjectID

  /**
   * @description ProductID
   * @type {Edm.String} 
   * @memberof LeadProduct
   */
  ProductID

  /**
   * @description Quantity
   * @type {c4codata.Quantity} 
   * @memberof LeadProduct
   */
  Quantity

  /**
   * @type {Lead|Lead[]} 
   * @memberof LeadProduct
   */
  Lead
}

export class LeadSalesAndMarketingTeam extends C4CODataType {

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof LeadSalesAndMarketingTeam
   */
  EMail

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof LeadSalesAndMarketingTeam
   */
  ETag

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof LeadSalesAndMarketingTeam
   */
  Mobile

  /**
   * @description Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof LeadSalesAndMarketingTeam
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof LeadSalesAndMarketingTeam
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof LeadSalesAndMarketingTeam
   */
  ParentObjectID

  /**
   * @description PartyUUID
   * @type {Edm.Guid} 
   * @memberof LeadSalesAndMarketingTeam
   */
  PartyUUID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof LeadSalesAndMarketingTeam
   */
  Phone

  /**
   * @description Main
   * @type {Edm.Boolean} 
   * @memberof LeadSalesAndMarketingTeam
   */
  Primary

  /**
   * @description RoleCategoryCode
   * @type {Edm.String} 
   * @memberof LeadSalesAndMarketingTeam
   */
  RoleCategoryCode

  /**
   * @description RoleCategoryCodeText
   * @type {Edm.String} 
   * @memberof LeadSalesAndMarketingTeam
   */
  RoleCategoryCodeText

  /**
   * @description RoleCode
   * @type {Edm.String} 
   * @memberof LeadSalesAndMarketingTeam
   */
  RoleCode

  /**
   * @description RoleCodeText
   * @type {Edm.String} 
   * @memberof LeadSalesAndMarketingTeam
   */
  RoleCodeText

  /**
   * @type {Lead|Lead[]} 
   * @memberof LeadSalesAndMarketingTeam
   */
  Lead
}

export class LeanLead extends C4CODataType {

  /**
   * @description Customer Information City
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountCity

  /**
   * @description Account Information Language
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountCorrespondenceLanguageCode

  /**
   * @description Customer Information Country
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountCountry

  /**
   * @description Account Information D-U-N-S
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountDUNS

  /**
   * @description Individual Customer Information E-Mail
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountEMail

  /**
   * @description Account Information Fax
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountFax

  /**
   * @description Account Information Latitude
   * @type {Edm.Decimal} 
   * @memberof LeanLead
   */
  AccountLatitudeMeasure

  /**
   * @description AccountLatitudeMeasureUnitCode
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountLatitudeMeasureUnitCode

  /**
   * @description Account Information Legal Form
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountLegalForm

  /**
   * @description Account Information Longitude
   * @type {Edm.Decimal} 
   * @memberof LeanLead
   */
  AccountLongitudeMeasure

  /**
   * @description AccountLongitudeMeasureUnitCode
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountLongitudeMeasureUnitCode

  /**
   * @description Account Information Mobile
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountMobile

  /**
   * @description Account Information Note
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountNote

  /**
   * @description Account Party ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountPartyID

  /**
   * @description AccountPartyName
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountPartyName

  /**
   * @description Account Party UUID
   * @type {Edm.Guid} 
   * @memberof LeanLead
   */
  AccountPartyUUID

  /**
   * @description Account Information Phone
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountPhone

  /**
   * @description Account Information Address Line 2
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountPostalAddressElementsAdditionalStreetPrefixName

  /**
   * @description Account Information Address Line 5
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountPostalAddressElementsAdditionalStreetSuffixName

  /**
   * @description Account Information County
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountPostalAddressElementsCountyName

  /**
   * @description AccountPostalAddressElementsHouseID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountPostalAddressElementsHouseID

  /**
   * @description Account Information P.O.Box
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountPostalAddressElementsPOBoxID

  /**
   * @description Individual Customer Information Street
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountPostalAddressElementsStreetName

  /**
   * @description Individual Customer Information Postal Code
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountPostalAddressElementsStreetPostalCode

  /**
   * @description Account Information Address Line 1
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountPostalAddressElementsStreetPrefix

  /**
   * @description Account Information Address Line 4
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountPostalAddressElementsStreetSufix

  /**
   * @description AccountPreferredCommunicationMediumTypeCode
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountPreferredCommunicationMediumTypeCode

  /**
   * @description Customer Information State
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountState

  /**
   * @description Account Information Web Site
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AccountWebsite

  /**
   * @description 跟进时效
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ActionDuration

  /**
   * @description 跟进次数
   * @type {Edm.Decimal} 
   * @memberof LeanLead
   */
  ActionTimes

  /**
   * @description 激活日期
   * @type {Edm.DateTime} 
   * @memberof LeanLead
   */
  ActiveDate

  /**
   * @description 激活时间
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLead
   */
  ActiveDateTime

  /**
   * @description 激活月
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ActiveMonth

  /**
   * @description ActiveMonthText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ActiveMonthText

  /**
   * @description 激活季度
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ActiveQuarter

  /**
   * @description ActiveQuarterText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ActiveQuarterText

  /**
   * @description 激活年
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ActiveYear

  /**
   * @description 激活年月
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ActiveYearMOnth

  /**
   * @description 激活年季
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ActiveYearQuarter

  /**
   * @description 激活年周
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ActiveYearWeek

  /**
   * @description 详细地址
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  Address

  /**
   * @description 审批申请人
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  Applicant

  /**
   * @description 审批申请人ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ApplicantID

  /**
   * @description 审批时间
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLead
   */
  ApprovalDateTime

  /**
   * @description 审批状态
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ApprovalStatus

  /**
   * @description Approval Status
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ApprovalStatusCode

  /**
   * @description ApprovalStatusCodeText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ApprovalStatusCodeText

  /**
   * @description ApprovalStatusText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ApprovalStatusText

  /**
   * @description 审批人
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  Approver

  /**
   * @description 审批人ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ApproverID

  /**
   * @description 分配时间
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLead
   */
  ArrageDateTime

  /**
   * @description 到店次数
   * @type {Edm.Decimal} 
   * @memberof LeanLead
   */
  ArrivalTimes

  /**
   * @description A转H时间
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLead
   */
  AtoHDateTime

  /**
   * @description A转H时效
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  AtoHDuration

  /**
   * @description 生日
   * @type {Edm.DateTime} 
   * @memberof LeanLead
   */
  BirthDate

  /**
   * @description B转A时间
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLead
   */
  BtoADateTime

  /**
   * @description B转A时效
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  BtoADuration

  /**
   * @description 购车预算(万元)
   * @type {Edm.Decimal} 
   * @memberof LeanLead
   */
  Budget

  /**
   * @description Contact Information Function
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  BusinessPartnerRelationshipBusinessPartnerFunctionTypeCode

  /**
   * @description Contact Information Department
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  BusinessPartnerRelationshipBusinessPartnerFunctionalAreaCode

  /**
   * @description Contact Information VIP Contact
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  BusinessPartnerRelationshipContactVIPReasonCode

  /**
   * @description Contact Information Engagement Score
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  BusinessPartnerRelationshipEngagementScoreNumberValue

  /**
   * @description 购买方式
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  BuyMethod2

  /**
   * @description BuyMethod2Text
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  BuyMethod2Text

  /**
   * @description Campaign ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  CampaignID

  /**
   * @description 退订时间
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLead
   */
  CancelOrderTime

  /**
   * @description 证件号码
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  CertificateID

  /**
   * @description 证件类型
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  CertificateTyep

  /**
   * @description CertificateTyepText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  CertificateTyepText

  /**
   * @description 城市ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  CityID

  /**
   * @description 城市
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  CityName2

  /**
   * @description Company
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  Company

  /**
   * @description Account Information Addtional Name 3
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  CompanyFourthName

  /**
   * @description Account Information Additional Name
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  CompanySecondName

  /**
   * @description Account Information Additional Name 2
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  CompanyThirdName

  /**
   * @description 竞品车型补充
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  CompetitorNotes

  /**
   * @description Consistency Status
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ConsistencyStatusCode

  /**
   * @description ConsistencyStatusCodeText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ConsistencyStatusCodeText

  /**
   * @description Contact Information Academic Title
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactAcademicTitleCode

  /**
   * @description Contact Information Additional Academic Title
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactAdditionalAcademicTitleCode

  /**
   * @description Contact Information Contact Permission
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactAllowedCode

  /**
   * @description Contact Information Building
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactBuildingID

  /**
   * @description Contact Information Language
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactCorrespondenceLanguageCode

  /**
   * @description Contact Information Department from Business Card
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactDepartmentName

  /**
   * @description Contact Information EMail
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactEMail

  /**
   * @description Contact Information E-Mail Invalid
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactEMailUsageDeniedIndicator

  /**
   * @description Contact Information Fax
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactFacsimileFormattedNumberDescription

  /**
   * @description Contact First Name
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactFirstName

  /**
   * @description Contact Information Floor
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactFloorID

  /**
   * @description Contact Information Title
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactFormOfAddressCode

  /**
   * @description Contact Information Job Title
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactFunctionalTitleName

  /**
   * @description Contact Information Gender
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactGenderCode

  /**
   * @description Main Contact ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactID

  /**
   * @description Contact Last Name
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactLastName

  /**
   * @description Contact Information Marital Status
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactMaritalStatusCode

  /**
   * @description Contact Middle Name
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactMiddleName

  /**
   * @description Contact Information Mobile
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactMobile

  /**
   * @description Main Contact Name
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactName

  /**
   * @description Contact Information Nickname
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactNickName

  /**
   * @description Contact Information Note
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactNote

  /**
   * @description Contact Information Phone
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactPhone

  /**
   * @description Contact Information Room
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ContactRoomID

  /**
   * @description Contact UUID
   * @type {Edm.Guid} 
   * @memberof LeanLead
   */
  ContactUUID

  /**
   * @description 国家/地区
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  Country

  /**
   * @description CountryText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  CountryText

  /**
   * @description 区县
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  County

  /**
   * @description 创建来源
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  CreatSoucre

  /**
   * @description CreatSoucreText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  CreatSoucreText

  /**
   * @description Creation Date Time
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLead
   */
  CreationDateTime

  /**
   * @description 创建人名
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  Creator

  /**
   * @description 创建人ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  CreatorID

  /**
   * @description C转B时间
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLead
   */
  CtoBDateTime

  /**
   * @description C转B时效
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  CtoBDuration

  /**
   * @description 客户编码
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  CustomerID

  /**
   * @description 网销平台-客户意向
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  CustomerIntentioncontent

  /**
   * @description CustomerIntentioncontentText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  CustomerIntentioncontentText

  /**
   * @description 客户UUID
   * @type {Edm.Guid} 
   * @memberof LeanLead
   */
  CustomerUUIDcontent

  /**
   * @description DMS合同编号
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  DMSContractID

  /**
   * @description 经销商集团
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  DealerGroup

  /**
   * @description 经销商ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  DealerID

  /**
   * @description 经销商名
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  Dearler

  /**
   * @description 下定金额
   * @type {Edm.Decimal} 
   * @memberof LeanLead
   */
  DepositAmountcontent

  /**
   * @description DepositAmountcurrencyCode
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  DepositAmountcurrencyCode

  /**
   * @description DepositAmountcurrencyCodeText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  DepositAmountcurrencyCodeText

  /**
   * @description 下定时间
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLead
   */
  DepositTime

  /**
   * @description 派发时间
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLead
   */
  DistributeDateTime

  /**
   * @description 派发时效
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  DistributeDuration

  /**
   * @description Distribution Channel
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  DistributionChannelCode

  /**
   * @description DistributionChannelCodeText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  DistributionChannelCodeText

  /**
   * @description Division
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  DivisionCode

  /**
   * @description DivisionCodeText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  DivisionCodeText

  /**
   * @description 电商核销时间
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLead
   */
  ECommerceCheckTime

  /**
   * @description 电商名
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ECommerceName

  /**
   * @description 电商订单ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ECommerceOrderID

  /**
   * @description 电商付款时间
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLead
   */
  ECommercePayTime

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLead
   */
  ETag

  /**
   * @description Email
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  Emailcontent

  /**
   * @description EmployeeResponsibleUUID
   * @type {Edm.Guid} 
   * @memberof LeanLead
   */
  EmployeeResponsibleUUID

  /**
   * @description End Date
   * @type {Edm.DateTime} 
   * @memberof LeanLead
   */
  EndDate

  /**
   * @description Expected Revenue Value
   * @type {Edm.Decimal} 
   * @memberof LeanLead
   */
  ExpectedRevenueAmount

  /**
   * @description Expected Revenue Amount Currency
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ExpectedRevenueCurrencyCode

  /**
   * @description ExpectedRevenueCurrencyCodeText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ExpectedRevenueCurrencyCodeText

  /**
   * @description External ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ExternalID

  /**
   * @description 首次跟进时间
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLead
   */
  FirstActionTime

  /**
   * @description 首触渠道
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  FirstTouch

  /**
   * @description 首触时间
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLead
   */
  FirstTouchDateTime

  /**
   * @description 客户名称
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  FullName

  /**
   * @description 性别
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  Gender

  /**
   * @description GenderText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  GenderText

  /**
   * @description Category
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  GroupCode

  /**
   * @description GroupCodeText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  GroupCodeText

  /**
   * @description 是否核验
   * @type {Edm.Boolean} 
   * @memberof LeanLead
   */
  HasChecked

  /**
   * @description 是否清洗
   * @type {Edm.Boolean} 
   * @memberof LeanLead
   */
  HasCleaned

  /**
   * @description 兴趣爱好
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  Hobby

  /**
   * @description H转下订时效
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  HtoDepositDuration

  /**
   * @description 下订转成交时效
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  HtoOrderDuration

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ID

  /**
   * @description 失效时间
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLead
   */
  InActiveTime

  /**
   * @description Individual Customer Information ABC Classification
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerABCClassificationCode

  /**
   * @description Individual Customer Information Academic Title
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerAcademicTitleCode

  /**
   * @description Individual Customer Information City
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerAddressCity

  /**
   * @description Individual Customer Information Country
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerAddressCountry

  /**
   * @description Individual Customer Information County Name
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerAddressCountyName

  /**
   * @description Individual Customer Information House Number
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerAddressHouseID

  /**
   * @description Individual Customer Information Postal Code
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerAddressPostalCode

  /**
   * @description Individual Customer Information State
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerAddressState

  /**
   * @description Individual Customer Information Street Name
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerAddressStreetName

  /**
   * @description Individual Customer Information Date of Birth
   * @type {Edm.DateTime} 
   * @memberof LeanLead
   */
  IndividualCustomerBirthDate

  /**
   * @description Individual Customer Information Contact Permission
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerContactAllowedCode

  /**
   * @description Individual Customer Information E-Mail
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerEMail

  /**
   * @description Last Name of Indiv. Customer
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerFamilyName

  /**
   * @description Individual Customer Information Fax
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerFax

  /**
   * @description Individual Customer Information Title
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerFormOfAddressCode

  /**
   * @description Individual Customer Information Gender
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerGenderCode

  /**
   * @description First Name of Indiv. Customer
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerGivenName

  /**
   * @description Individual Customer Information Initials
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerInitialsName

  /**
   * @description Individual Customer Information Marital Status
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerMaritalStatusCode

  /**
   * @description Middle Name of Indiv. Customer
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerMiddleName

  /**
   * @description Individual Customer Information Mobile
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerMobile

  /**
   * @description Individual Customer Information Prefix
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerNamePrefixCode

  /**
   * @description Individual Customer Information Nationality
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerNationalityCountryCode

  /**
   * @description Individual Customer Information Language
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerNonVerbalCommunicationLanguageCode

  /**
   * @description Individual Customer Information Profession
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerOccupationCode

  /**
   * @description Individual Customer Information Phone
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IndividualCustomerPhone

  /**
   * @description 意向车型ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IntentionCarCategoryID

  /**
   * @description 意向车型
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IntentionCarName

  /**
   * @description 意向车型一层
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IntentionCarNameLevel1

  /**
   * @description 意向车型二层
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IntentionCarNameLevel2

  /**
   * @description 意向车型三层
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IntentionCarNameLevel3

  /**
   * @description 意向车型四层
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IntentionCarNameLevel4

  /**
   * @description 意向车型五层
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IntentionCarNameLevel5

  /**
   * @description 意向车型一层ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IntentionCaraCategoryLevel1ID

  /**
   * @description 意向车型二层ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IntentionCaraCategoryLevel2ID

  /**
   * @description 意向车型三层ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IntentionCaraCategoryLevel3ID

  /**
   * @description 意向车型四层ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IntentionCaraCategoryLevel4ID

  /**
   * @description 意向车型五层ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IntentionCaraCategoryLevel5ID

  /**
   * @description 颜色
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IntentionColor

  /**
   * @description 颜色MappingID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IntentionColorID

  /**
   * @description 期待优惠金额
   * @type {Edm.Decimal} 
   * @memberof LeanLead
   */
  IntentionDiscountAmountcontent

  /**
   * @description IntentionDiscountAmountcurrencyCode
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IntentionDiscountAmountcurrencyCode

  /**
   * @description IntentionDiscountAmountcurrencyCodeText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  IntentionDiscountAmountcurrencyCodeText

  /**
   * @description 意向购车时间
   * @type {Edm.DateTime} 
   * @memberof LeanLead
   */
  IntentionOrderTime

  /**
   * @description 线上互动次数
   * @type {Edm.Decimal} 
   * @memberof LeanLead
   */
  InteractionTimes

  /**
   * @description 开票价格
   * @type {Edm.Decimal} 
   * @memberof LeanLead
   */
  InvoiceAmountcontent

  /**
   * @description InvoiceAmountcurrencyCode
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  InvoiceAmountcurrencyCode

  /**
   * @description InvoiceAmountcurrencyCodeText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  InvoiceAmountcurrencyCodeText

  /**
   * @description 成交车型
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  InvoiceCarCategory

  /**
   * @description 成交车系
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  InvoiceCarCategoryID

  /**
   * @description 成交车型ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  InvoiceCarIDcontent

  /**
   * @description 开票日期
   * @type {Edm.DateTime} 
   * @memberof LeanLead
   */
  InvoiceDate

  /**
   * @description 是否代办上牌保险
   * @type {Edm.Boolean} 
   * @memberof LeanLead
   */
  IsAgentService

  /**
   * @description 是否逾期未分配
   * @type {Edm.Boolean} 
   * @memberof LeanLead
   */
  IsArrangeOverDue

  /**
   * @description 是否公司购车
   * @type {Edm.Boolean} 
   * @memberof LeanLead
   */
  IsBuyForCompany

  /**
   * @description 是否本人购车
   * @type {Edm.Boolean} 
   * @memberof LeanLead
   */
  IsBuyForSelf

  /**
   * @description 是否保客
   * @type {Edm.Boolean} 
   * @memberof LeanLead
   */
  IsCustomer

  /**
   * @description 是否逾期未派发
   * @type {Edm.Boolean} 
   * @memberof LeanLead
   */
  IsDistributeOverDue

  /**
   * @description 是否电商下定
   * @type {Edm.Boolean} 
   * @memberof LeanLead
   */
  IsECommerceDeposit

  /**
   * @description 是否集团客户
   * @type {Edm.Boolean} 
   * @memberof LeanLead
   */
  IsGroupCompany

  /**
   * @description 是否需要自动检查
   * @type {Edm.Boolean} 
   * @memberof LeanLead
   */
  IsNeedAutoCheck

  /**
   * @description 需要更新Mykt
   * @type {Edm.Boolean} 
   * @memberof LeanLead
   */
  IsNeedUpdateMykt

  /**
   * @description 线索级别-人工
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  LeadLevel

  /**
   * @description LeadLevelText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  LeadLevelText

  /**
   * @description 线索归属
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  LeadOwnerShipcontent

  /**
   * @description LeadOwnerShipcontentText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  LeadOwnerShipcontentText

  /**
   * @description 线索评级-系统
   * @type {Edm.Decimal} 
   * @memberof LeanLead
   */
  LeadPoints

  /**
   * @description 线索来源一级ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  LeadSource1ID

  /**
   * @description 线索来源一级
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  LeadSource1Name

  /**
   * @description 线索来源二级ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  LeadSource2ID

  /**
   * @description 线索来源二级
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  LeadSource2Name

  /**
   * @description 线索来源三级ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  LeadSource3ID

  /**
   * @description 线索来源三级
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  LeadSource3Name

  /**
   * @description Life Cycle Status
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  LifeCycleStatusCode

  /**
   * @description LifeCycleStatusCodeText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  LifeCycleStatusCodeText

  /**
   * @description 战败流失原因一类
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  LoseReason1content

  /**
   * @description LoseReason1contentText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  LoseReason1contentText

  /**
   * @description 战败流失原因二类
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  LoseReason2content

  /**
   * @description LoseReason2contentText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  LoseReason2contentText

  /**
   * @description 确认战败/流失时间
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLead
   */
  LoseTime

  /**
   * @description 主要购车关注点
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  MainPurchaseFocuscontent

  /**
   * @description MainPurchaseFocuscontentText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  MainPurchaseFocuscontentText

  /**
   * @description 婚姻状态
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  MaritalStatuscontent

  /**
   * @description MaritalStatuscontentText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  MaritalStatuscontentText

  /**
   * @description Marketing Unit Name
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  MarketingUnitName

  /**
   * @description Marketing Unit Party ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  MarketingUnitPartyID

  /**
   * @description Marketing Unit Party UUID
   * @type {Edm.Guid} 
   * @memberof LeanLead
   */
  MarketingUnitPartyUUID

  /**
   * @description 手机号码
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  Mobile

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  Name

  /**
   * @description Name Language Code
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  NameLanguageCode

  /**
   * @description NameLanguageCodeText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  NameLanguageCodeText

  /**
   * @description Note
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  Note

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ObjectID

  /**
   * @description 职业
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  Occupationcontent

  /**
   * @description OccupationcontentText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  OccupationcontentText

  /**
   * @description 成交时间
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLead
   */
  OrderTime

  /**
   * @description Account Information ABC Classification
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  OrganisationAccountABCClassificationCode

  /**
   * @description Customer Information Contact Permission
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  OrganisationAccountContactAllowedCode

  /**
   * @description Account Information Industry
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  OrganisationAccountIndustrialSectorCode

  /**
   * @description Source
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  OriginTypeCode

  /**
   * @description OriginTypeCodeText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  OriginTypeCodeText

  /**
   * @description Owner Party ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  OwnerPartyID

  /**
   * @description Owner Party ID  (Sales)
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  OwnerPartyIDSales

  /**
   * @description OwnerPartyName
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  OwnerPartyName

  /**
   * @description Owner Party UUID
   * @type {Edm.Guid} 
   * @memberof LeanLead
   */
  OwnerPartyUUID

  /**
   * @description Owner Party UUID (Sales)
   * @type {Edm.Guid} 
   * @memberof LeanLead
   */
  OwnerPartyUUIDSales

  /**
   * @description Owner (Sales)
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  OwnerSalesName

  /**
   * @description 付款方式
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  Paymentcontent

  /**
   * @description PaymentcontentText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  PaymentcontentText

  /**
   * @description 固定号码
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  Phone

  /**
   * @description 邮编
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  PostCode

  /**
   * @description Priority
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  PriorityCode

  /**
   * @description PriorityCodeText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  PriorityCodeText

  /**
   * @description 购车用途
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  PurchaseUsecontent

  /**
   * @description PurchaseUsecontentText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  PurchaseUsecontentText

  /**
   * @description QQ号
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  QQID

  /**
   * @description Qualification Level
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  QualificationLevelCode

  /**
   * @description QualificationLevelCodeText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  QualificationLevelCodeText

  /**
   * @description 省份
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  Regioncontent

  /**
   * @description RegioncontentText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  RegioncontentText

  /**
   * @description Reason Code
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ResultReasonCode

  /**
   * @description ResultReasonCodeText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  ResultReasonCodeText

  /**
   * @description 退货时间
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLead
   */
  ReturnTime

  /**
   * @description 销售代表
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  Sales

  /**
   * @description 实销延迟原因
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  SalesDelayReason

  /**
   * @description Sales Group
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  SalesGroupID

  /**
   * @description SalesGroupUUID
   * @type {Edm.Guid} 
   * @memberof LeanLead
   */
  SalesGroupUUID

  /**
   * @description 销售代表ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  SalesID

  /**
   * @description 销售经理
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  SalesManager

  /**
   * @description 销售经理ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  SalesManagerID

  /**
   * @description Sales Office
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  SalesOfficeID

  /**
   * @description SalesOfficeUUID
   * @type {Edm.Guid} 
   * @memberof LeanLead
   */
  SalesOfficeUUID

  /**
   * @description Sales Organisation
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  SalesOrganisationID

  /**
   * @description SalesOrganisationUUID
   * @type {Edm.Guid} 
   * @memberof LeanLead
   */
  SalesOrganisationUUID

  /**
   * @description Sales Territory ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  SalesTerritoryID

  /**
   * @description Sales Territory Name
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  SalesTerritoryName

  /**
   * @description Sales Territory UUID
   * @type {Edm.Guid} 
   * @memberof LeanLead
   */
  SalesTerritoryUUID

  /**
   * @description Sales Unit Name
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  SalesUnitName

  /**
   * @description Sales Unit Party ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  SalesUnitPartyID

  /**
   * @description Sales Unit Party UUID
   * @type {Edm.Guid} 
   * @memberof LeanLead
   */
  SalesUnitPartyUUID

  /**
   * @description 交车时间
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLead
   */
  ShipmentTime

  /**
   * @description 原始线索ID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  SourceLeadID

  /**
   * @description 特销号
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  SpecialSalesID

  /**
   * @description Start Date
   * @type {Edm.DateTime} 
   * @memberof LeanLead
   */
  StartDate

  /**
   * @description Survey Score
   * @type {Edm.Int32} 
   * @memberof LeanLead
   */
  SurveyTotalScoreValue

  /**
   * @description Status
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  UserStatusCode

  /**
   * @description UserStatusCodeText
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  UserStatusCodeText

  /**
   * @description VIN码/底盘码
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  VINCode

  /**
   * @description 微信号
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  WechatID

  /**
   * @description 微信OpneID
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  WechatOpenID

  /**
   * @description 微博号
   * @type {Edm.String} 
   * @memberof LeanLead
   */
  WeiboID

  /**
   * @type {LeanLeadAttachmentFolder|LeanLeadAttachmentFolder[]} 
   * @memberof LeanLead
   */
  LeanLeadAttachmentFolder

  /**
   * @type {LeanLeadBusinessTransactionDocumentReference|LeanLeadBusinessTransactionDocumentReference[]} 
   * @memberof LeanLead
   */
  LeanLeadBusinessTransactionDocumentReference

  /**
   * @type {LeanLeadContact|LeanLeadContact[]} 
   * @memberof LeanLead
   */
  LeanLeadContact

  /**
   * @type {LeanLeadExternalParty|LeanLeadExternalParty[]} 
   * @memberof LeanLead
   */
  LeanLeadExternalParty

  /**
   * @type {LeanLeadItem|LeanLeadItem[]} 
   * @memberof LeanLead
   */
  LeanLeadItem

  /**
   * @type {LeanLeadSalesAndMarketingTeam|LeanLeadSalesAndMarketingTeam[]} 
   * @memberof LeanLead
   */
  LeanLeadSalesAndMarketingTeam
}

export class LeanLeadAttachmentFolder extends C4CODataType {

  /**
   * @description Binary
   * @type {Edm.Binary} 
   * @memberof LeanLeadAttachmentFolder
   */
  Binary

  /**
   * @description Category Code
   * @type {Edm.String} 
   * @memberof LeanLeadAttachmentFolder
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof LeanLeadAttachmentFolder
   */
  CategoryCodeText

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof LeanLeadAttachmentFolder
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof LeanLeadAttachmentFolder
   */
  CreatedOn

  /**
   * @description Document Link
   * @type {Edm.String} 
   * @memberof LeanLeadAttachmentFolder
   */
  DocumentLink

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLeadAttachmentFolder
   */
  ETag

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof LeanLeadAttachmentFolder
   */
  LastUpdatedBy

  /**
   * @description Last Updated On
   * @type {Edm.DateTime} 
   * @memberof LeanLeadAttachmentFolder
   */
  LastUpdatedOn

  /**
   * @description Link Web URI
   * @type {Edm.String} 
   * @memberof LeanLeadAttachmentFolder
   */
  LinkWebURI

  /**
   * @description Mime Type
   * @type {Edm.String} 
   * @memberof LeanLeadAttachmentFolder
   */
  MimeType

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof LeanLeadAttachmentFolder
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof LeanLeadAttachmentFolder
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof LeanLeadAttachmentFolder
   */
  ParentObjectID

  /**
   * @description Size In KiloBytes
   * @type {Edm.Decimal} 
   * @memberof LeanLeadAttachmentFolder
   */
  SizeInkB

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof LeanLeadAttachmentFolder
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof LeanLeadAttachmentFolder
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof LeanLeadAttachmentFolder
   */
  UUID
}

export class LeanLeadBusinessTransactionDocumentReference extends C4CODataType {

  /**
   * @description BusinessTransactionDocumentRelationshipRoleCode
   * @type {Edm.String} 
   * @memberof LeanLeadBusinessTransactionDocumentReference
   */
  BusinessTransactionDocumentRelationshipRoleCode

  /**
   * @description BusinessTransactionDocumentRelationshipRoleCodeText
   * @type {Edm.String} 
   * @memberof LeanLeadBusinessTransactionDocumentReference
   */
  BusinessTransactionDocumentRelationshipRoleCodeText

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLeadBusinessTransactionDocumentReference
   */
  ETag

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof LeanLeadBusinessTransactionDocumentReference
   */
  ID

  /**
   * @description ItemID
   * @type {Edm.String} 
   * @memberof LeanLeadBusinessTransactionDocumentReference
   */
  ItemID

  /**
   * @description ItemTypeCode
   * @type {Edm.String} 
   * @memberof LeanLeadBusinessTransactionDocumentReference
   */
  ItemTypeCode

  /**
   * @description ItemTypeCodeText
   * @type {Edm.String} 
   * @memberof LeanLeadBusinessTransactionDocumentReference
   */
  ItemTypeCodeText

  /**
   * @description ItemUUID
   * @type {Edm.Guid} 
   * @memberof LeanLeadBusinessTransactionDocumentReference
   */
  ItemUUID

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof LeanLeadBusinessTransactionDocumentReference
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof LeanLeadBusinessTransactionDocumentReference
   */
  ParentObjectID

  /**
   * @description TypeCode
   * @type {Edm.String} 
   * @memberof LeanLeadBusinessTransactionDocumentReference
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof LeanLeadBusinessTransactionDocumentReference
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof LeanLeadBusinessTransactionDocumentReference
   */
  UUID

  /**
   * @type {Appointment|Appointment[]} 
   * @memberof LeanLeadBusinessTransactionDocumentReference
   */
  Appointment

  /**
   * @type {EMail|EMail[]} 
   * @memberof LeanLeadBusinessTransactionDocumentReference
   */
  EMail

  /**
   * @type {LeanLead|LeanLead[]} 
   * @memberof LeanLeadBusinessTransactionDocumentReference
   */
  LeanLead

  /**
   * @type {PhoneCall|PhoneCall[]} 
   * @memberof LeanLeadBusinessTransactionDocumentReference
   */
  PhoneCall

  /**
   * @type {ServiceRequest|ServiceRequest[]} 
   * @memberof LeanLeadBusinessTransactionDocumentReference
   */
  ServiceRequest

  /**
   * @type {Task|Task[]} 
   * @memberof LeanLeadBusinessTransactionDocumentReference
   */
  Task
}

export class LeanLeadContact extends C4CODataType {

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof LeanLeadContact
   */
  EMail

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLeadContact
   */
  ETag

  /**
   * @description Main
   * @type {Edm.Boolean} 
   * @memberof LeanLeadContact
   */
  MainIndicator

  /**
   * @description Mobile
   * @type {Edm.String} 
   * @memberof LeanLeadContact
   */
  Mobile

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof LeanLeadContact
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof LeanLeadContact
   */
  ParentObjectID

  /**
   * @description Party ID
   * @type {Edm.String} 
   * @memberof LeanLeadContact
   */
  PartyID

  /**
   * @description Party Name
   * @type {Edm.String} 
   * @memberof LeanLeadContact
   */
  PartyName

  /**
   * @description PartyUUID
   * @type {Edm.Guid} 
   * @memberof LeanLeadContact
   */
  PartyUUID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof LeanLeadContact
   */
  Phone

  /**
   * @type {LeanLead|LeanLead[]} 
   * @memberof LeanLeadContact
   */
  LeanLead
}

export class LeanLeadExternalParty extends C4CODataType {

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof LeanLeadExternalParty
   */
  EMail

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLeadExternalParty
   */
  ETag

  /**
   * @description Primary
   * @type {Edm.Boolean} 
   * @memberof LeanLeadExternalParty
   */
  MainIndicator

  /**
   * @description Primary Contact ID
   * @type {Edm.String} 
   * @memberof LeanLeadExternalParty
   */
  MainPartyContactPartyID

  /**
   * @description Primary Contact Name
   * @type {Edm.String} 
   * @memberof LeanLeadExternalParty
   */
  MainPartyContactPartyName

  /**
   * @description Primary Contact UUID
   * @type {Edm.Guid} 
   * @memberof LeanLeadExternalParty
   */
  MainPartyContactPartyUUID

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof LeanLeadExternalParty
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof LeanLeadExternalParty
   */
  ParentObjectID

  /**
   * @description Party ID
   * @type {Edm.String} 
   * @memberof LeanLeadExternalParty
   */
  PartyID

  /**
   * @description Party Name
   * @type {Edm.String} 
   * @memberof LeanLeadExternalParty
   */
  PartyName

  /**
   * @description PartyUUID
   * @type {Edm.Guid} 
   * @memberof LeanLeadExternalParty
   */
  PartyUUID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof LeanLeadExternalParty
   */
  Phone

  /**
   * @description Role
   * @type {Edm.String} 
   * @memberof LeanLeadExternalParty
   */
  RoleCode

  /**
   * @description RoleCodeText
   * @type {Edm.String} 
   * @memberof LeanLeadExternalParty
   */
  RoleCodeText

  /**
   * @type {LeanLead|LeanLead[]} 
   * @memberof LeanLeadExternalParty
   */
  LeanLead
}

export class LeanLeadItem extends C4CODataType {

  /**
   * @description Description
   * @type {Edm.String} 
   * @memberof LeanLeadItem
   */
  Description

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLeadItem
   */
  ETag

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof LeanLeadItem
   */
  ID

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof LeanLeadItem
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof LeanLeadItem
   */
  ParentObjectID

  /**
   * @description Product Category Description
   * @type {Edm.String} 
   * @memberof LeanLeadItem
   */
  ProductCategoryDescription

  /**
   * @description Catetory
   * @type {Edm.String} 
   * @memberof LeanLeadItem
   */
  ProductCategoryInternalID

  /**
   * @description Product ID
   * @type {Edm.String} 
   * @memberof LeanLeadItem
   */
  ProductID

  /**
   * @description Product Description
   * @type {Edm.String} 
   * @memberof LeanLeadItem
   */
  ProductName

  /**
   * @description Product UUID
   * @type {Edm.Guid} 
   * @memberof LeanLeadItem
   */
  ProductUUID

  /**
   * @description Quantity
   * @type {Edm.Decimal} 
   * @memberof LeanLeadItem
   */
  Quantity

  /**
   * @description Quantity UnitCode
   * @type {Edm.String} 
   * @memberof LeanLeadItem
   */
  unitCode

  /**
   * @description unitCodeText
   * @type {Edm.String} 
   * @memberof LeanLeadItem
   */
  unitCodeText

  /**
   * @type {LeanLead|LeanLead[]} 
   * @memberof LeanLeadItem
   */
  LeanLead
}

export class LeanLeadSalesAndMarketingTeam extends C4CODataType {

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof LeanLeadSalesAndMarketingTeam
   */
  EMail

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof LeanLeadSalesAndMarketingTeam
   */
  ETag

  /**
   * @description Primary
   * @type {Edm.Boolean} 
   * @memberof LeanLeadSalesAndMarketingTeam
   */
  MainIndicator

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof LeanLeadSalesAndMarketingTeam
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof LeanLeadSalesAndMarketingTeam
   */
  ParentObjectID

  /**
   * @description Party ID
   * @type {Edm.String} 
   * @memberof LeanLeadSalesAndMarketingTeam
   */
  PartyID

  /**
   * @description Party Name
   * @type {Edm.String} 
   * @memberof LeanLeadSalesAndMarketingTeam
   */
  PartyName

  /**
   * @description PartyUUID
   * @type {Edm.Guid} 
   * @memberof LeanLeadSalesAndMarketingTeam
   */
  PartyUUID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof LeanLeadSalesAndMarketingTeam
   */
  Phone

  /**
   * @description Role
   * @type {Edm.String} 
   * @memberof LeanLeadSalesAndMarketingTeam
   */
  RoleCode

  /**
   * @description RoleCodeText
   * @type {Edm.String} 
   * @memberof LeanLeadSalesAndMarketingTeam
   */
  RoleCodeText

  /**
   * @type {LeanLead|LeanLead[]} 
   * @memberof LeanLeadSalesAndMarketingTeam
   */
  LeanLead
}

export class Opportunity extends C4CODataType {

  /**
   * @description Account
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  AccountID

  /**
   * @description Account Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof Opportunity
   */
  AccountName

  /**
   * @description Account UUID
   * @type {Edm.Guid} 
   * @memberof Opportunity
   */
  AccountUUID

  /**
   * @description Approval Status
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  ApprovalStatusCode

  /**
   * @description ApprovalStatusCodeText
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  ApprovalStatusCodeText

  /**
   * @description Category
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  CategoryCodeText

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  ChangedBy

  /**
   * @description Changed By UUID
   * @type {Edm.Guid} 
   * @memberof Opportunity
   */
  ChangedByUUID

  /**
   * @description Changed On
   * @type {Edm.DateTimeOffset} 
   * @memberof Opportunity
   */
  ChangedOn

  /**
   * @description Close Date
   * @type {Edm.DateTime} 
   * @memberof Opportunity
   */
  CloseDate

  /**
   * @description Consistency Status
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  ConsistencyStatusCode

  /**
   * @description ConsistencyStatusCodeText
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  ConsistencyStatusCodeText

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  CreatedByFormattedName

  /**
   * @description Created By UUID
   * @type {Edm.Guid} 
   * @memberof Opportunity
   */
  CreatedByUUID

  /**
   * @description Created On
   * @type {Edm.DateTimeOffset} 
   * @memberof Opportunity
   */
  CreatedOn

  /**
   * @description Custom Status
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  CustomStatusCode

  /**
   * @description CustomStatusCodeText
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  CustomStatusCodeText

  /**
   * @description Distribution Channel
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  DistributionChannelCode

  /**
   * @description DistributionChannelCodeText
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  DistributionChannelCodeText

  /**
   * @description Division
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  DivisionCode

  /**
   * @description DivisionCodeText
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  DivisionCodeText

  /**
   * @description Document Type
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  DocumentTypeCode

  /**
   * @description DocumentTypeCodeText
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  DocumentTypeCodeText

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof Opportunity
   */
  ETag

  /**
   * @description Expected Value
   * @type {c4codata.Amount} 
   * @memberof Opportunity
   */
  ExpectedValue

  /**
   * @description Forecast Category
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  ForecastCategoryCode

  /**
   * @description ForecastCategoryCodeText
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  ForecastCategoryCodeText

  /**
   * @description Last Change Date
   * @type {Edm.DateTime} 
   * @memberof Opportunity
   */
  LastChangeDate

  /**
   * @description Name
   * @type {c4codata.ENCRYPTED_EXTENDED_Name} 
   * @memberof Opportunity
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  ObjectID

  /**
   * @description Opportunity ID
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  OpportunityID

  /**
   * @description Owner ID
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  OwnerID

  /**
   * @description Owner Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof Opportunity
   */
  OwnerName

  /**
   * @description Owner UUID
   * @type {Edm.Guid} 
   * @memberof Opportunity
   */
  OwnerUUID

  /**
   * @description Contact
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  PrimaryContactID

  /**
   * @description Contact Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof Opportunity
   */
  PrimaryContactName

  /**
   * @description Contact UUID
   * @type {Edm.Guid} 
   * @memberof Opportunity
   */
  PrimaryContactUUID

  /**
   * @description Priority
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  PriorityCode

  /**
   * @description PriorityCodeText
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  PriorityCodeText

  /**
   * @description Probability
   * @type {Edm.Decimal} 
   * @memberof Opportunity
   */
  ProbabilityPercent

  /**
   * @description Progress
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  ProgressCode

  /**
   * @description ProgressCodeText
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  ProgressCodeText

  /**
   * @description Relevant for Forecast
   * @type {Edm.Boolean} 
   * @memberof Opportunity
   */
  PublishToForecast

  /**
   * @description Reason for Status
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  ReasonForStatusCode

  /**
   * @description ReasonForStatusCodeText
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  ReasonForStatusCodeText

  /**
   * @description Sales Cycle
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  SalesCycleCode

  /**
   * @description SalesCycleCodeText
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  SalesCycleCodeText

  /**
   * @description Sales Group
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  SalesGroupID

  /**
   * @description Sales Office
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  SalesOfficeID

  /**
   * @description Sales Organisation
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  SalesOrganisationID

  /**
   * @description Sales Organisation UUID
   * @type {Edm.Guid} 
   * @memberof Opportunity
   */
  SalesOrganisationUUID

  /**
   * @description Sales Phase
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  SalesPhaseCode

  /**
   * @description SalesPhaseCodeText
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  SalesPhaseCodeText

  /**
   * @description Sales Territory
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  SalesTerritoryID

  /**
   * @description Sales Territory UUID
   * @type {Edm.Guid} 
   * @memberof Opportunity
   */
  SalesTerritoryUUID

  /**
   * @description Sales Unit
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  SalesUnitID

  /**
   * @description Sales Unit UUID
   * @type {Edm.Guid} 
   * @memberof Opportunity
   */
  SalesUnitUUID

  /**
   * @description Source
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  SourceCode

  /**
   * @description SourceCodeText
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  SourceCodeText

  /**
   * @description Start Date
   * @type {Edm.DateTime} 
   * @memberof Opportunity
   */
  StartDate

  /**
   * @description Status
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  StatusCode

  /**
   * @description StatusCodeText
   * @type {Edm.String} 
   * @memberof Opportunity
   */
  StatusCodeText

  /**
   * @description Total Negotiated Value
   * @type {c4codata.Amount} 
   * @memberof Opportunity
   */
  TotalNegotiatedValue

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof Opportunity
   */
  UUID

  /**
   * @description Weighted Value
   * @type {c4codata.Amount} 
   * @memberof Opportunity
   */
  WeightedValue

  /**
   * @type {OpportunityAppointmentSalesActivity|OpportunityAppointmentSalesActivity[]} 
   * @memberof Opportunity
   */
  OpportunityAppointmentSalesActivity

  /**
   * @type {OpportunityAttachment|OpportunityAttachment[]} 
   * @memberof Opportunity
   */
  OpportunityAttachment

  /**
   * @type {OpportunityBusinessDocumentReference|OpportunityBusinessDocumentReference[]} 
   * @memberof Opportunity
   */
  OpportunityBusinessDocumentReference

  /**
   * @type {OpportunityContact|OpportunityContact[]} 
   * @memberof Opportunity
   */
  OpportunityContact

  /**
   * @type {OpportunityEMailSalesActivity|OpportunityEMailSalesActivity[]} 
   * @memberof Opportunity
   */
  OpportunityEMailSalesActivity

  /**
   * @type {OpportunityInvolvedParties|OpportunityInvolvedParties[]} 
   * @memberof Opportunity
   */
  OpportunityInvolvedParties

  /**
   * @type {OpportunityNotes|OpportunityNotes[]} 
   * @memberof Opportunity
   */
  OpportunityNotes

  /**
   * @type {OpportunityPhoneCallSalesActivity|OpportunityPhoneCallSalesActivity[]} 
   * @memberof Opportunity
   */
  OpportunityPhoneCallSalesActivity

  /**
   * @type {OpportunityProduct|OpportunityProduct[]} 
   * @memberof Opportunity
   */
  OpportunityProduct

  /**
   * @type {OpportunitySalesTeam|OpportunitySalesTeam[]} 
   * @memberof Opportunity
   */
  OpportunitySalesTeam

  /**
   * @type {OpportunityTaskSalesActivity|OpportunityTaskSalesActivity[]} 
   * @memberof Opportunity
   */
  OpportunityTaskSalesActivity
}

export class OpportunityAppointmentSalesActivity extends C4CODataType {

  /**
   * @description BusinessTransactionDocumentRelationshipRoleCode
   * @type {Edm.String} 
   * @memberof OpportunityAppointmentSalesActivity
   */
  BusinessTransactionDocumentRelationshipRoleCode

  /**
   * @description BusinessTransactionDocumentRelationshipRoleCodeText
   * @type {Edm.String} 
   * @memberof OpportunityAppointmentSalesActivity
   */
  BusinessTransactionDocumentRelationshipRoleCodeText

  /**
   * @description DueDateTime
   * @type {c4codata.LOCALNORMALISED_DateTime} 
   * @memberof OpportunityAppointmentSalesActivity
   */
  DueDateTime

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof OpportunityAppointmentSalesActivity
   */
  ETag

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof OpportunityAppointmentSalesActivity
   */
  ID

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof OpportunityAppointmentSalesActivity
   */
  ObjectID

  /**
   * @description OwnerID
   * @type {Edm.String} 
   * @memberof OpportunityAppointmentSalesActivity
   */
  OwnerID

  /**
   * @description OwnerName
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof OpportunityAppointmentSalesActivity
   */
  OwnerName

  /**
   * @description OwnerUUID
   * @type {Edm.Guid} 
   * @memberof OpportunityAppointmentSalesActivity
   */
  OwnerUUID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof OpportunityAppointmentSalesActivity
   */
  ParentObjectID

  /**
   * @description SalesPhaseCode
   * @type {Edm.String} 
   * @memberof OpportunityAppointmentSalesActivity
   */
  SalesPhaseCode

  /**
   * @description SalesPhaseCodeText
   * @type {Edm.String} 
   * @memberof OpportunityAppointmentSalesActivity
   */
  SalesPhaseCodeText

  /**
   * @description StartDateTime
   * @type {Edm.DateTimeOffset} 
   * @memberof OpportunityAppointmentSalesActivity
   */
  StartDateTime

  /**
   * @description StatusCode
   * @type {Edm.String} 
   * @memberof OpportunityAppointmentSalesActivity
   */
  StatusCode

  /**
   * @description StatusCodeText
   * @type {Edm.String} 
   * @memberof OpportunityAppointmentSalesActivity
   */
  StatusCodeText

  /**
   * @description Subject
   * @type {Edm.String} 
   * @memberof OpportunityAppointmentSalesActivity
   */
  Subject

  /**
   * @description TypeCode
   * @type {Edm.String} 
   * @memberof OpportunityAppointmentSalesActivity
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof OpportunityAppointmentSalesActivity
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof OpportunityAppointmentSalesActivity
   */
  UUID

  /**
   * @type {Opportunity|Opportunity[]} 
   * @memberof OpportunityAppointmentSalesActivity
   */
  Opportunity
}

export class OpportunityAttachment extends C4CODataType {

  /**
   * @description Binary
   * @type {Edm.Binary} 
   * @memberof OpportunityAttachment
   */
  Binary

  /**
   * @description Category Code
   * @type {Edm.String} 
   * @memberof OpportunityAttachment
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof OpportunityAttachment
   */
  CategoryCodeText

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof OpportunityAttachment
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof OpportunityAttachment
   */
  CreatedOn

  /**
   * @description Document Link
   * @type {Edm.String} 
   * @memberof OpportunityAttachment
   */
  DocumentLink

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof OpportunityAttachment
   */
  ETag

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof OpportunityAttachment
   */
  LastUpdatedBy

  /**
   * @description Last Updated On
   * @type {Edm.DateTime} 
   * @memberof OpportunityAttachment
   */
  LastUpdatedOn

  /**
   * @description Link Web URI
   * @type {Edm.String} 
   * @memberof OpportunityAttachment
   */
  LinkWebURI

  /**
   * @description Mime Type
   * @type {Edm.String} 
   * @memberof OpportunityAttachment
   */
  MimeType

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof OpportunityAttachment
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof OpportunityAttachment
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof OpportunityAttachment
   */
  ParentObjectID

  /**
   * @description Size In KiloBytes
   * @type {Edm.Decimal} 
   * @memberof OpportunityAttachment
   */
  SizeInkB

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof OpportunityAttachment
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof OpportunityAttachment
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof OpportunityAttachment
   */
  UUID
}

export class OpportunityBusinessDocumentReference extends C4CODataType {

  /**
   * @description BusinessTransactionDocumentRelationshipRoleCode
   * @type {Edm.String} 
   * @memberof OpportunityBusinessDocumentReference
   */
  BusinessTransactionDocumentRelationshipRoleCode

  /**
   * @description BusinessTransactionDocumentRelationshipRoleCodeText
   * @type {Edm.String} 
   * @memberof OpportunityBusinessDocumentReference
   */
  BusinessTransactionDocumentRelationshipRoleCodeText

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof OpportunityBusinessDocumentReference
   */
  ETag

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof OpportunityBusinessDocumentReference
   */
  ID

  /**
   * @description ItemID
   * @type {Edm.String} 
   * @memberof OpportunityBusinessDocumentReference
   */
  ItemID

  /**
   * @description ItemTypeCode
   * @type {Edm.String} 
   * @memberof OpportunityBusinessDocumentReference
   */
  ItemTypeCode

  /**
   * @description ItemTypeCodeText
   * @type {Edm.String} 
   * @memberof OpportunityBusinessDocumentReference
   */
  ItemTypeCodeText

  /**
   * @description ItemUUID
   * @type {Edm.Guid} 
   * @memberof OpportunityBusinessDocumentReference
   */
  ItemUUID

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof OpportunityBusinessDocumentReference
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof OpportunityBusinessDocumentReference
   */
  ParentObjectID

  /**
   * @description TypeCode
   * @type {Edm.String} 
   * @memberof OpportunityBusinessDocumentReference
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof OpportunityBusinessDocumentReference
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof OpportunityBusinessDocumentReference
   */
  UUID

  /**
   * @type {Appointment|Appointment[]} 
   * @memberof OpportunityBusinessDocumentReference
   */
  Appointment

  /**
   * @type {EMail|EMail[]} 
   * @memberof OpportunityBusinessDocumentReference
   */
  EMail

  /**
   * @type {Opportunity|Opportunity[]} 
   * @memberof OpportunityBusinessDocumentReference
   */
  Opportunity

  /**
   * @type {PhoneCall|PhoneCall[]} 
   * @memberof OpportunityBusinessDocumentReference
   */
  PhoneCall

  /**
   * @type {Task|Task[]} 
   * @memberof OpportunityBusinessDocumentReference
   */
  Task

  /**
   * @type {Visit|Visit[]} 
   * @memberof OpportunityBusinessDocumentReference
   */
  Visit
}

export class OpportunityContact extends C4CODataType {

  /**
   * @description Address
   * @type {Edm.String} 
   * @memberof OpportunityContact
   */
  Address

  /**
   * @description Attitude Toward Opportunity
   * @type {Edm.String} 
   * @memberof OpportunityContact
   */
  AttitudeTowardOpportunityCode

  /**
   * @description AttitudeTowardOpportunityCodeText
   * @type {Edm.String} 
   * @memberof OpportunityContact
   */
  AttitudeTowardOpportunityCodeText

  /**
   * @description Contact
   * @type {Edm.String} 
   * @memberof OpportunityContact
   */
  ContactID

  /**
   * @description ContactUUID
   * @type {Edm.Guid} 
   * @memberof OpportunityContact
   */
  ContactUUID

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof OpportunityContact
   */
  EMail

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof OpportunityContact
   */
  ETag

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof OpportunityContact
   */
  Mobile

  /**
   * @description Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof OpportunityContact
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof OpportunityContact
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof OpportunityContact
   */
  ParentObjectID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof OpportunityContact
   */
  Phone

  /**
   * @description Main
   * @type {Edm.Boolean} 
   * @memberof OpportunityContact
   */
  PrimaryContact

  /**
   * @description RoleCode
   * @type {Edm.String} 
   * @memberof OpportunityContact
   */
  RoleCode

  /**
   * @description RoleCodeText
   * @type {Edm.String} 
   * @memberof OpportunityContact
   */
  RoleCodeText

  /**
   * @type {Opportunity|Opportunity[]} 
   * @memberof OpportunityContact
   */
  Opportunity
}

export class OpportunityEMailSalesActivity extends C4CODataType {

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof OpportunityEMailSalesActivity
   */
  ETag

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof OpportunityEMailSalesActivity
   */
  ID

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof OpportunityEMailSalesActivity
   */
  ObjectID

  /**
   * @description OwnerID
   * @type {Edm.String} 
   * @memberof OpportunityEMailSalesActivity
   */
  OwnerID

  /**
   * @description OwnerName
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof OpportunityEMailSalesActivity
   */
  OwnerName

  /**
   * @description OwnerUUID
   * @type {Edm.Guid} 
   * @memberof OpportunityEMailSalesActivity
   */
  OwnerUUID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof OpportunityEMailSalesActivity
   */
  ParentObjectID

  /**
   * @description SalesPhaseCode
   * @type {Edm.String} 
   * @memberof OpportunityEMailSalesActivity
   */
  SalesPhaseCode

  /**
   * @description SalesPhaseCodeText
   * @type {Edm.String} 
   * @memberof OpportunityEMailSalesActivity
   */
  SalesPhaseCodeText

  /**
   * @description StartDateTime
   * @type {Edm.DateTimeOffset} 
   * @memberof OpportunityEMailSalesActivity
   */
  StartDateTime

  /**
   * @description StatusCode
   * @type {Edm.String} 
   * @memberof OpportunityEMailSalesActivity
   */
  StatusCode

  /**
   * @description StatusCodeText
   * @type {Edm.String} 
   * @memberof OpportunityEMailSalesActivity
   */
  StatusCodeText

  /**
   * @description Subject
   * @type {Edm.String} 
   * @memberof OpportunityEMailSalesActivity
   */
  Subject

  /**
   * @description TypeCode
   * @type {Edm.String} 
   * @memberof OpportunityEMailSalesActivity
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof OpportunityEMailSalesActivity
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof OpportunityEMailSalesActivity
   */
  UUID

  /**
   * @type {Opportunity|Opportunity[]} 
   * @memberof OpportunityEMailSalesActivity
   */
  Opportunity
}

export class OpportunityInvolvedParties extends C4CODataType {

  /**
   * @description Address
   * @type {Edm.String} 
   * @memberof OpportunityInvolvedParties
   */
  Address

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof OpportunityInvolvedParties
   */
  EMail

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof OpportunityInvolvedParties
   */
  ETag

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof OpportunityInvolvedParties
   */
  Mobile

  /**
   * @description Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof OpportunityInvolvedParties
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof OpportunityInvolvedParties
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof OpportunityInvolvedParties
   */
  ParentObjectID

  /**
   * @description PartyID
   * @type {Edm.String} 
   * @memberof OpportunityInvolvedParties
   */
  PartyID

  /**
   * @description PartyUUID
   * @type {Edm.Guid} 
   * @memberof OpportunityInvolvedParties
   */
  PartyUUID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof OpportunityInvolvedParties
   */
  Phone

  /**
   * @description Primary
   * @type {Edm.Boolean} 
   * @memberof OpportunityInvolvedParties
   */
  Primary

  /**
   * @description Contact
   * @type {Edm.String} 
   * @memberof OpportunityInvolvedParties
   */
  PrimaryContactID

  /**
   * @description PrimaryContactName
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof OpportunityInvolvedParties
   */
  PrimaryContactName

  /**
   * @description PrimaryContactUUID
   * @type {Edm.Guid} 
   * @memberof OpportunityInvolvedParties
   */
  PrimaryContactUUID

  /**
   * @description RoleCode
   * @type {Edm.String} 
   * @memberof OpportunityInvolvedParties
   */
  RoleCode

  /**
   * @description RoleCodeText
   * @type {Edm.String} 
   * @memberof OpportunityInvolvedParties
   */
  RoleCodeText

  /**
   * @type {Opportunity|Opportunity[]} 
   * @memberof OpportunityInvolvedParties
   */
  Opportunity
}

export class OpportunityNotes extends C4CODataType {

  /**
   * @description Author Name
   * @type {Edm.String} 
   * @memberof OpportunityNotes
   */
  AuthorName

  /**
   * @description Author UUID
   * @type {Edm.Guid} 
   * @memberof OpportunityNotes
   */
  AuthorUUID

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof OpportunityNotes
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof OpportunityNotes
   */
  CreatedOn

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof OpportunityNotes
   */
  ETag

  /**
   * @description Language Code
   * @type {Edm.String} 
   * @memberof OpportunityNotes
   */
  LanguageCode

  /**
   * @description LanguageCodeText
   * @type {Edm.String} 
   * @memberof OpportunityNotes
   */
  LanguageCodeText

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof OpportunityNotes
   */
  LastUpdatedBy

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof OpportunityNotes
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof OpportunityNotes
   */
  ParentObjectID

  /**
   * @description Text
   * @type {Edm.String} 
   * @memberof OpportunityNotes
   */
  Text

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof OpportunityNotes
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof OpportunityNotes
   */
  TypeCodeText

  /**
   * @description Updated On
   * @type {Edm.DateTime} 
   * @memberof OpportunityNotes
   */
  UpdatedOn
}

export class OpportunityPhoneCallSalesActivity extends C4CODataType {

  /**
   * @description BusinessTransactionDocumentRelationshipRoleCode
   * @type {Edm.String} 
   * @memberof OpportunityPhoneCallSalesActivity
   */
  BusinessTransactionDocumentRelationshipRoleCode

  /**
   * @description BusinessTransactionDocumentRelationshipRoleCodeText
   * @type {Edm.String} 
   * @memberof OpportunityPhoneCallSalesActivity
   */
  BusinessTransactionDocumentRelationshipRoleCodeText

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof OpportunityPhoneCallSalesActivity
   */
  ETag

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof OpportunityPhoneCallSalesActivity
   */
  ID

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof OpportunityPhoneCallSalesActivity
   */
  ObjectID

  /**
   * @description OwnerID
   * @type {Edm.String} 
   * @memberof OpportunityPhoneCallSalesActivity
   */
  OwnerID

  /**
   * @description OwnerName
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof OpportunityPhoneCallSalesActivity
   */
  OwnerName

  /**
   * @description OwnerUUID
   * @type {Edm.Guid} 
   * @memberof OpportunityPhoneCallSalesActivity
   */
  OwnerUUID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof OpportunityPhoneCallSalesActivity
   */
  ParentObjectID

  /**
   * @description SalesPhaseCode
   * @type {Edm.String} 
   * @memberof OpportunityPhoneCallSalesActivity
   */
  SalesPhaseCode

  /**
   * @description SalesPhaseCodeText
   * @type {Edm.String} 
   * @memberof OpportunityPhoneCallSalesActivity
   */
  SalesPhaseCodeText

  /**
   * @description StartDateTime
   * @type {Edm.DateTimeOffset} 
   * @memberof OpportunityPhoneCallSalesActivity
   */
  StartDateTime

  /**
   * @description StatusCode
   * @type {Edm.String} 
   * @memberof OpportunityPhoneCallSalesActivity
   */
  StatusCode

  /**
   * @description StatusCodeText
   * @type {Edm.String} 
   * @memberof OpportunityPhoneCallSalesActivity
   */
  StatusCodeText

  /**
   * @description Subject
   * @type {Edm.String} 
   * @memberof OpportunityPhoneCallSalesActivity
   */
  Subject

  /**
   * @description TypeCode
   * @type {Edm.String} 
   * @memberof OpportunityPhoneCallSalesActivity
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof OpportunityPhoneCallSalesActivity
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof OpportunityPhoneCallSalesActivity
   */
  UUID

  /**
   * @type {Opportunity|Opportunity[]} 
   * @memberof OpportunityPhoneCallSalesActivity
   */
  Opportunity
}

export class OpportunityProduct extends C4CODataType {

  /**
   * @description Description
   * @type {c4codata.SHORT_Description} 
   * @memberof OpportunityProduct
   */
  Description

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof OpportunityProduct
   */
  ETag

  /**
   * @description Line
   * @type {Edm.String} 
   * @memberof OpportunityProduct
   */
  ID

  /**
   * @description NegotiatedValue
   * @type {c4codata.Amount} 
   * @memberof OpportunityProduct
   */
  NegotiatedValue

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof OpportunityProduct
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof OpportunityProduct
   */
  ParentObjectID

  /**
   * @description ProductCategoryDescription
   * @type {c4codata.MEDIUM_Description} 
   * @memberof OpportunityProduct
   */
  ProductCategoryDescription

  /**
   * @description Product Category
   * @type {Edm.String} 
   * @memberof OpportunityProduct
   */
  ProductCategoryID

  /**
   * @description ProductDescription
   * @type {c4codata.SHORT_Description} 
   * @memberof OpportunityProduct
   */
  ProductDescription

  /**
   * @description ProductID
   * @type {Edm.String} 
   * @memberof OpportunityProduct
   */
  ProductID

  /**
   * @description ProductUUID
   * @type {Edm.Guid} 
   * @memberof OpportunityProduct
   */
  ProductUUID

  /**
   * @description ProposedValue
   * @type {c4codata.Amount} 
   * @memberof OpportunityProduct
   */
  ProposedValue

  /**
   * @description Quantity
   * @type {c4codata.Quantity} 
   * @memberof OpportunityProduct
   */
  Quantity

  /**
   * @description RevenueEndDate
   * @type {Edm.DateTime} 
   * @memberof OpportunityProduct
   */
  RevenueEndDate

  /**
   * @description RevenueStartDate
   * @type {Edm.DateTime} 
   * @memberof OpportunityProduct
   */
  RevenueStartDate

  /**
   * @type {Opportunity|Opportunity[]} 
   * @memberof OpportunityProduct
   */
  Opportunity

  /**
   * @type {OpportunityProductNotes|OpportunityProductNotes[]} 
   * @memberof OpportunityProduct
   */
  OpportunityProductNotes
}

export class OpportunityProductNotes extends C4CODataType {

  /**
   * @description Author Name
   * @type {Edm.String} 
   * @memberof OpportunityProductNotes
   */
  AuthorName

  /**
   * @description Author UUID
   * @type {Edm.Guid} 
   * @memberof OpportunityProductNotes
   */
  AuthorUUID

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof OpportunityProductNotes
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof OpportunityProductNotes
   */
  CreatedOn

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof OpportunityProductNotes
   */
  ETag

  /**
   * @description Language Code
   * @type {Edm.String} 
   * @memberof OpportunityProductNotes
   */
  LanguageCode

  /**
   * @description LanguageCodeText
   * @type {Edm.String} 
   * @memberof OpportunityProductNotes
   */
  LanguageCodeText

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof OpportunityProductNotes
   */
  LastUpdatedBy

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof OpportunityProductNotes
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof OpportunityProductNotes
   */
  ParentObjectID

  /**
   * @description Text
   * @type {Edm.String} 
   * @memberof OpportunityProductNotes
   */
  Text

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof OpportunityProductNotes
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof OpportunityProductNotes
   */
  TypeCodeText

  /**
   * @description Updated On
   * @type {Edm.DateTime} 
   * @memberof OpportunityProductNotes
   */
  UpdatedOn
}

export class OpportunitySalesTeam extends C4CODataType {

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof OpportunitySalesTeam
   */
  EMail

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof OpportunitySalesTeam
   */
  ETag

  /**
   * @description FormattedName
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof OpportunitySalesTeam
   */
  FormattedName

  /**
   * @description Main
   * @type {Edm.Boolean} 
   * @memberof OpportunitySalesTeam
   */
  Main

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof OpportunitySalesTeam
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof OpportunitySalesTeam
   */
  ParentObjectID

  /**
   * @description PartyUUID
   * @type {Edm.Guid} 
   * @memberof OpportunitySalesTeam
   */
  PartyUUID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof OpportunitySalesTeam
   */
  Phone

  /**
   * @description RoleCode
   * @type {Edm.String} 
   * @memberof OpportunitySalesTeam
   */
  RoleCode

  /**
   * @description RoleCodeText
   * @type {Edm.String} 
   * @memberof OpportunitySalesTeam
   */
  RoleCodeText

  /**
   * @type {Opportunity|Opportunity[]} 
   * @memberof OpportunitySalesTeam
   */
  Opportunity
}

export class OpportunityTaskSalesActivity extends C4CODataType {

  /**
   * @description DueEndDateTime
   * @type {c4codata.LOCALNORMALISED_DateTime} 
   * @memberof OpportunityTaskSalesActivity
   */
  DueEndDateTime

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof OpportunityTaskSalesActivity
   */
  ETag

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof OpportunityTaskSalesActivity
   */
  ID

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof OpportunityTaskSalesActivity
   */
  ObjectID

  /**
   * @description OwnerID
   * @type {Edm.String} 
   * @memberof OpportunityTaskSalesActivity
   */
  OwnerID

  /**
   * @description OwnerName
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof OpportunityTaskSalesActivity
   */
  OwnerName

  /**
   * @description OwnerUUID
   * @type {Edm.Guid} 
   * @memberof OpportunityTaskSalesActivity
   */
  OwnerUUID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof OpportunityTaskSalesActivity
   */
  ParentObjectID

  /**
   * @description PriorityCode
   * @type {Edm.String} 
   * @memberof OpportunityTaskSalesActivity
   */
  PriorityCode

  /**
   * @description PriorityCodeText
   * @type {Edm.String} 
   * @memberof OpportunityTaskSalesActivity
   */
  PriorityCodeText

  /**
   * @description SalesPhaseCode
   * @type {Edm.String} 
   * @memberof OpportunityTaskSalesActivity
   */
  SalesPhaseCode

  /**
   * @description SalesPhaseCodeText
   * @type {Edm.String} 
   * @memberof OpportunityTaskSalesActivity
   */
  SalesPhaseCodeText

  /**
   * @description StartDateTime
   * @type {Edm.DateTimeOffset} 
   * @memberof OpportunityTaskSalesActivity
   */
  StartDateTime

  /**
   * @description StatusCode
   * @type {Edm.String} 
   * @memberof OpportunityTaskSalesActivity
   */
  StatusCode

  /**
   * @description StatusCodeText
   * @type {Edm.String} 
   * @memberof OpportunityTaskSalesActivity
   */
  StatusCodeText

  /**
   * @description Subject
   * @type {Edm.String} 
   * @memberof OpportunityTaskSalesActivity
   */
  Subject

  /**
   * @description TypeCode
   * @type {Edm.String} 
   * @memberof OpportunityTaskSalesActivity
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof OpportunityTaskSalesActivity
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof OpportunityTaskSalesActivity
   */
  UUID

  /**
   * @type {Opportunity|Opportunity[]} 
   * @memberof OpportunityTaskSalesActivity
   */
  Opportunity
}

export class PhoneCall extends C4CODataType {

  /**
   * @description Account
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof PhoneCall
   */
  AccountFormattedName

  /**
   * @description Account UUID
   * @type {Edm.Guid} 
   * @memberof PhoneCall
   */
  AccountUUID

  /**
   * @description Campaign
   * @type {c4codata.MEDIUM_Description} 
   * @memberof PhoneCall
   */
  CampaignDescription

  /**
   * @description Campaign UUID
   * @type {Edm.Guid} 
   * @memberof PhoneCall
   */
  CampaignUUID

  /**
   * @description Category
   * @type {Edm.String} 
   * @memberof PhoneCall
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof PhoneCall
   */
  CategoryCodeText

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof PhoneCall
   */
  CreatedByFormattedName

  /**
   * @description Created By UUID
   * @type {Edm.Guid} 
   * @memberof PhoneCall
   */
  CreatedByUUID

  /**
   * @description Created On
   * @type {Edm.DateTimeOffset} 
   * @memberof PhoneCall
   */
  CreatedOn

  /**
   * @description Start Date/Time
   * @type {c4codata.LOCALNORMALISED_DateTime} 
   * @memberof PhoneCall
   */
  DateTime

  /**
   * @description Direction
   * @type {Edm.String} 
   * @memberof PhoneCall
   */
  DirectionCode

  /**
   * @description DirectionCodeText
   * @type {Edm.String} 
   * @memberof PhoneCall
   */
  DirectionCodeText

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof PhoneCall
   */
  ETag

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof PhoneCall
   */
  ID

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof PhoneCall
   */
  ObjectID

  /**
   * @description Owner
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof PhoneCall
   */
  OwnerFormattedName

  /**
   * @description Owner UUID
   * @type {Edm.Guid} 
   * @memberof PhoneCall
   */
  OwnerUUID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof PhoneCall
   */
  Phone

  /**
   * @description Primary Contact
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof PhoneCall
   */
  PrimaryContactFormattedName

  /**
   * @description Primary Contact UUID
   * @type {Edm.Guid} 
   * @memberof PhoneCall
   */
  PrimaryContactUUID

  /**
   * @description Priority
   * @type {Edm.String} 
   * @memberof PhoneCall
   */
  PriorityCode

  /**
   * @description PriorityCodeText
   * @type {Edm.String} 
   * @memberof PhoneCall
   */
  PriorityCodeText

  /**
   * @description Response Option
   * @type {c4codata.MEDIUM_Description} 
   * @memberof PhoneCall
   */
  ResponseOptionDescription

  /**
   * @description Response Option ID
   * @type {Edm.String} 
   * @memberof PhoneCall
   */
  ResponseOptionID

  /**
   * @description Status
   * @type {Edm.String} 
   * @memberof PhoneCall
   */
  StatusCode

  /**
   * @description StatusCodeText
   * @type {Edm.String} 
   * @memberof PhoneCall
   */
  StatusCodeText

  /**
   * @description Subject
   * @type {Edm.String} 
   * @memberof PhoneCall
   */
  SubjectName

  /**
   * @description TypeCode
   * @type {Edm.String} 
   * @memberof PhoneCall
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof PhoneCall
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof PhoneCall
   */
  UUID

  /**
   * @type {PhoneCallAttachment|PhoneCallAttachment[]} 
   * @memberof PhoneCall
   */
  PhoneCallAttachment

  /**
   * @type {PhoneCallNotes|PhoneCallNotes[]} 
   * @memberof PhoneCall
   */
  PhoneCallNotes

  /**
   * @type {PhoneCallParticipants|PhoneCallParticipants[]} 
   * @memberof PhoneCall
   */
  PhoneCallParticipants
}

export class PhoneCallAttachment extends C4CODataType {

  /**
   * @description Binary
   * @type {Edm.Binary} 
   * @memberof PhoneCallAttachment
   */
  Binary

  /**
   * @description Category Code
   * @type {Edm.String} 
   * @memberof PhoneCallAttachment
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof PhoneCallAttachment
   */
  CategoryCodeText

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof PhoneCallAttachment
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof PhoneCallAttachment
   */
  CreatedOn

  /**
   * @description Document Link
   * @type {Edm.String} 
   * @memberof PhoneCallAttachment
   */
  DocumentLink

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof PhoneCallAttachment
   */
  ETag

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof PhoneCallAttachment
   */
  LastUpdatedBy

  /**
   * @description Last Updated On
   * @type {Edm.DateTime} 
   * @memberof PhoneCallAttachment
   */
  LastUpdatedOn

  /**
   * @description Link Web URI
   * @type {Edm.String} 
   * @memberof PhoneCallAttachment
   */
  LinkWebURI

  /**
   * @description Mime Type
   * @type {Edm.String} 
   * @memberof PhoneCallAttachment
   */
  MimeType

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof PhoneCallAttachment
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof PhoneCallAttachment
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof PhoneCallAttachment
   */
  ParentObjectID

  /**
   * @description Size In KiloBytes
   * @type {Edm.Decimal} 
   * @memberof PhoneCallAttachment
   */
  SizeInkB

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof PhoneCallAttachment
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof PhoneCallAttachment
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof PhoneCallAttachment
   */
  UUID
}

export class PhoneCallNotes extends C4CODataType {

  /**
   * @description Author Name
   * @type {Edm.String} 
   * @memberof PhoneCallNotes
   */
  AuthorName

  /**
   * @description Author UUID
   * @type {Edm.Guid} 
   * @memberof PhoneCallNotes
   */
  AuthorUUID

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof PhoneCallNotes
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof PhoneCallNotes
   */
  CreatedOn

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof PhoneCallNotes
   */
  ETag

  /**
   * @description Language Code
   * @type {Edm.String} 
   * @memberof PhoneCallNotes
   */
  LanguageCode

  /**
   * @description LanguageCodeText
   * @type {Edm.String} 
   * @memberof PhoneCallNotes
   */
  LanguageCodeText

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof PhoneCallNotes
   */
  LastUpdatedBy

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof PhoneCallNotes
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof PhoneCallNotes
   */
  ParentObjectID

  /**
   * @description Text
   * @type {Edm.String} 
   * @memberof PhoneCallNotes
   */
  Text

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof PhoneCallNotes
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof PhoneCallNotes
   */
  TypeCodeText

  /**
   * @description Updated On
   * @type {Edm.DateTime} 
   * @memberof PhoneCallNotes
   */
  UpdatedOn
}

export class PhoneCallParticipants extends C4CODataType {

  /**
   * @description Address
   * @type {Edm.String} 
   * @memberof PhoneCallParticipants
   */
  Address

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof PhoneCallParticipants
   */
  EMail

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof PhoneCallParticipants
   */
  ETag

  /**
   * @description Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof PhoneCallParticipants
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof PhoneCallParticipants
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof PhoneCallParticipants
   */
  ParentObjectID

  /**
   * @description PartyEmailURI
   * @type {Edm.String} 
   * @memberof PhoneCallParticipants
   */
  PartyEmailURI

  /**
   * @description PartyID
   * @type {Edm.String} 
   * @memberof PhoneCallParticipants
   */
  PartyID

  /**
   * @description PartyName
   * @type {Edm.String} 
   * @memberof PhoneCallParticipants
   */
  PartyName

  /**
   * @description PartyUUID
   * @type {Edm.Guid} 
   * @memberof PhoneCallParticipants
   */
  PartyUUID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof PhoneCallParticipants
   */
  Phone

  /**
   * @description RoleCode
   * @type {Edm.String} 
   * @memberof PhoneCallParticipants
   */
  RoleCode

  /**
   * @description RoleCodeText
   * @type {Edm.String} 
   * @memberof PhoneCallParticipants
   */
  RoleCodeText

  /**
   * @type {PhoneCall|PhoneCall[]} 
   * @memberof PhoneCallParticipants
   */
  PhoneCall
}

export class Product extends C4CODataType {

  /**
   * @description ChangedOn
   * @type {Edm.DateTimeOffset} 
   * @memberof Product
   */
  ChangedOn

  /**
   * @description 颜色码
   * @type {Edm.String} 
   * @memberof Product
   */
  ColorCode

  /**
   * @description 颜色
   * @type {Edm.String} 
   * @memberof Product
   */
  Color_M

  /**
   * @description CompetitorProductIndicator
   * @type {Edm.Boolean} 
   * @memberof Product
   */
  CompetitorProductIndicator

  /**
   * @description 配置
   * @type {Edm.String} 
   * @memberof Product
   */
  Config

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof Product
   */
  CreatedBy

  /**
   * @description CreatedOn
   * @type {Edm.DateTimeOffset} 
   * @memberof Product
   */
  CreatedOn

  /**
   * @description Product Description
   * @type {Edm.String} 
   * @memberof Product
   */
  Description

  /**
   * @description 排量
   * @type {Edm.String} 
   * @memberof Product
   */
  Displacement

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof Product
   */
  ETag

  /**
   * @description 尾气排放标准
   * @type {Edm.String} 
   * @memberof Product
   */
  ExhaustEmissionStd

  /**
   * @description 燃油类型
   * @type {Edm.String} 
   * @memberof Product
   */
  FuelType

  /**
   * @description Product ID
   * @type {Edm.String} 
   * @memberof Product
   */
  ID

  /**
   * @description 手自动
   * @type {Edm.String} 
   * @memberof Product
   */
  ManualAuto

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof Product
   */
  ObjectID

  /**
   * @description 订货周期
   * @type {Edm.Decimal} 
   * @memberof Product
   */
  OrderCycle

  /**
   * @description 产品生命周期
   * @type {Edm.String} 
   * @memberof Product
   */
  ProdcutLifecyclecontent

  /**
   * @description ProdcutLifecyclecontentText
   * @type {Edm.String} 
   * @memberof Product
   */
  ProdcutLifecyclecontentText

  /**
   * @description 采购周期
   * @type {Edm.Decimal} 
   * @memberof Product
   */
  PurchaseCycle

  /**
   * @description StatusCode
   * @type {Edm.String} 
   * @memberof Product
   */
  StatusCode

  /**
   * @description StatusCodeText
   * @type {Edm.String} 
   * @memberof Product
   */
  StatusCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof Product
   */
  UUID

  /**
   * @description Base UoM
   * @type {Edm.String} 
   * @memberof Product
   */
  UnitOfMeasureCode

  /**
   * @description UnitOfMeasureCodeText
   * @type {Edm.String} 
   * @memberof Product
   */
  UnitOfMeasureCodeText

  /**
   * @description 内饰
   * @type {Edm.String} 
   * @memberof Product
   */
  VIC_Upholstery

  /**
   * @description 版本
   * @type {Edm.String} 
   * @memberof Product
   */
  Version

  /**
   * @description languageCode
   * @type {Edm.String} 
   * @memberof Product
   */
  languageCode

  /**
   * @description languageCodeText
   * @type {Edm.String} 
   * @memberof Product
   */
  languageCodeText

  /**
   * @type {ExternalIDMapping|ExternalIDMapping[]} 
   * @memberof Product
   */
  ExternalIDMapping

  /**
   * @type {ProductAttachment|ProductAttachment[]} 
   * @memberof Product
   */
  ProductAttachment

  /**
   * @type {ProductCategoryAssignment|ProductCategoryAssignment[]} 
   * @memberof Product
   */
  ProductCategoryAssignment

  /**
   * @type {ProductChangedBy|ProductChangedBy[]} 
   * @memberof Product
   */
  ProductChangedBy

  /**
   * @type {ProductSales|ProductSales[]} 
   * @memberof Product
   */
  ProductSales
}

export class ProductAttachment extends C4CODataType {

  /**
   * @description Binary
   * @type {Edm.Binary} 
   * @memberof ProductAttachment
   */
  Binary

  /**
   * @description Category Code
   * @type {Edm.String} 
   * @memberof ProductAttachment
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof ProductAttachment
   */
  CategoryCodeText

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof ProductAttachment
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof ProductAttachment
   */
  CreatedOn

  /**
   * @description Document Link
   * @type {Edm.String} 
   * @memberof ProductAttachment
   */
  DocumentLink

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ProductAttachment
   */
  ETag

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof ProductAttachment
   */
  LastUpdatedBy

  /**
   * @description Last Updated On
   * @type {Edm.DateTime} 
   * @memberof ProductAttachment
   */
  LastUpdatedOn

  /**
   * @description Link Web URI
   * @type {Edm.String} 
   * @memberof ProductAttachment
   */
  LinkWebURI

  /**
   * @description Mime Type
   * @type {Edm.String} 
   * @memberof ProductAttachment
   */
  MimeType

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof ProductAttachment
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ProductAttachment
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof ProductAttachment
   */
  ParentObjectID

  /**
   * @description Size In KiloBytes
   * @type {Edm.Decimal} 
   * @memberof ProductAttachment
   */
  SizeInkB

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof ProductAttachment
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof ProductAttachment
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof ProductAttachment
   */
  UUID
}

export class ProductCategoryAssignment extends C4CODataType {

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ProductCategoryAssignment
   */
  ETag

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ProductCategoryAssignment
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof ProductCategoryAssignment
   */
  ParentObjectID

  /**
   * @description ProductCategoryDescription
   * @type {c4codata.MEDIUM_Description} 
   * @memberof ProductCategoryAssignment
   */
  ProductCategoryDescription

  /**
   * @description Product Category ID
   * @type {Edm.String} 
   * @memberof ProductCategoryAssignment
   */
  ProductCategoryID

  /**
   * @description Product Category
   * @type {Edm.Guid} 
   * @memberof ProductCategoryAssignment
   */
  ProductCategoryUUID

  /**
   * @type {Product|Product[]} 
   * @memberof ProductCategoryAssignment
   */
  Product
}

export class ProductCategoryHierarchy extends C4CODataType {

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ProductCategoryHierarchy
   */
  ETag

  /**
   * @description Product Category ID
   * @type {Edm.String} 
   * @memberof ProductCategoryHierarchy
   */
  InternalID

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ProductCategoryHierarchy
   */
  ObjectID

  /**
   * @description ParentInternalID
   * @type {Edm.String} 
   * @memberof ProductCategoryHierarchy
   */
  ParentInternalID

  /**
   * @description Product Assignment Allowed
   * @type {Edm.Boolean} 
   * @memberof ProductCategoryHierarchy
   */
  ProductAssignmentAllowedIndicator

  /**
   * @type {ProductCategoryHierarchyDescription|ProductCategoryHierarchyDescription[]} 
   * @memberof ProductCategoryHierarchy
   */
  ProductCategoryHierarchyDescription
}

export class ProductCategoryHierarchyDescription extends C4CODataType {

  /**
   * @description Product Category Description
   * @type {Edm.String} 
   * @memberof ProductCategoryHierarchyDescription
   */
  Description

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ProductCategoryHierarchyDescription
   */
  ETag

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ProductCategoryHierarchyDescription
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof ProductCategoryHierarchyDescription
   */
  ParentObjectID

  /**
   * @description languageCode
   * @type {Edm.String} 
   * @memberof ProductCategoryHierarchyDescription
   */
  languageCode

  /**
   * @description languageCodeText
   * @type {Edm.String} 
   * @memberof ProductCategoryHierarchyDescription
   */
  languageCodeText

  /**
   * @type {ProductCategoryHierarchy|ProductCategoryHierarchy[]} 
   * @memberof ProductCategoryHierarchyDescription
   */
  ProductCategoryHierarchy
}

export class ProductChangedBy extends C4CODataType {

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof ProductChangedBy
   */
  BusinessPartnerFormattedName

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ProductChangedBy
   */
  ObjectID
}

export class ProductSales extends C4CODataType {

  /**
   * @description Distribution Channel
   * @type {Edm.String} 
   * @memberof ProductSales
   */
  DistributionChannelCode

  /**
   * @description DistributionChannelCodeText
   * @type {Edm.String} 
   * @memberof ProductSales
   */
  DistributionChannelCodeText

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ProductSales
   */
  ETag

  /**
   * @description MinimumOrderQuantity
   * @type {c4codata.Quantity} 
   * @memberof ProductSales
   */
  MinimumOrderQuantity

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ProductSales
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof ProductSales
   */
  ParentObjectID

  /**
   * @description Sales Organization ID
   * @type {Edm.String} 
   * @memberof ProductSales
   */
  SalesOrganisationID

  /**
   * @description SalesOrganisationUUID
   * @type {Edm.Guid} 
   * @memberof ProductSales
   */
  SalesOrganisationUUID

  /**
   * @description SalesUoMCode
   * @type {Edm.String} 
   * @memberof ProductSales
   */
  SalesUoMCode

  /**
   * @description SalesUoMCodeText
   * @type {Edm.String} 
   * @memberof ProductSales
   */
  SalesUoMCodeText

  /**
   * @description StatusCode
   * @type {Edm.String} 
   * @memberof ProductSales
   */
  StatusCode

  /**
   * @description StatusCodeText
   * @type {Edm.String} 
   * @memberof ProductSales
   */
  StatusCodeText

  /**
   * @type {Product|Product[]} 
   * @memberof ProductSales
   */
  Product

  /**
   * @type {ProductSalesOrganisation|ProductSalesOrganisation[]} 
   * @memberof ProductSales
   */
  ProductSalesOrganisation
}

export class ProductSalesOrganisation extends C4CODataType {

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ProductSalesOrganisation
   */
  ETag

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ProductSalesOrganisation
   */
  ObjectID
}

export class ServiceAssignment extends C4CODataType {

  /**
   * @description AssignmentUUID
   * @type {Edm.Guid} 
   * @memberof ServiceAssignment
   */
  AssignmentUUID

  /**
   * @description BusinessActivityUUID
   * @type {Edm.Guid} 
   * @memberof ServiceAssignment
   */
  BusinessActivityUUID

  /**
   * @description CreatedBy
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  CreatedBy

  /**
   * @description CreationDateTime
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceAssignment
   */
  CreationDateTime

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  Customer

  /**
   * @description Party ID
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  CustomerID

  /**
   * @description Party Type
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  CustomerTypeCode

  /**
   * @description CustomerTypeCodeText
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  CustomerTypeCodeText

  /**
   * @description Division
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  DivisionCode

  /**
   * @description DivisionCodeText
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  DivisionCodeText

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceAssignment
   */
  ETag

  /**
   * @description Scheduled End Date Time
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceAssignment
   */
  EndDateTime

  /**
   * @description EndDateTimeZoneCode
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  EndDateTimeZoneCode

  /**
   * @description EndDateTimeZoneCodeText
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  EndDateTimeZoneCodeText

  /**
   * @description Fixed
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  Fixed

  /**
   * @description FixedText
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  FixedText

  /**
   * @description Full Day
   * @type {Edm.Boolean} 
   * @memberof ServiceAssignment
   */
  FullDayIndicator

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  ID

  /**
   * @description LastChangedBy
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  LastChangedBy

  /**
   * @description Status
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  LifeCycleStatusCode

  /**
   * @description LifeCycleStatusCodeText
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  LifeCycleStatusCodeText

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  ObjectID

  /**
   * @description Party ID
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  OrganizerID

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  OrganizerName

  /**
   * @description Party Type
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  OrganizerTypeCode

  /**
   * @description OrganizerTypeCodeText
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  OrganizerTypeCodeText

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  PrimaryContact

  /**
   * @description Party ID
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  PrimaryContactID

  /**
   * @description Party Type
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  PrimaryContactTypeCode

  /**
   * @description PrimaryContactTypeCodeText
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  PrimaryContactTypeCodeText

  /**
   * @description Priority
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  Priority

  /**
   * @description PriorityText
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  PriorityText

  /**
   * @description Document Type
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  ProcessingTypeCode

  /**
   * @description ProcessingTypeCodeText
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  ProcessingTypeCodeText

  /**
   * @description Released
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  Released

  /**
   * @description ReleasedText
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  ReleasedText

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  ServiceTechnician

  /**
   * @description Party ID
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  ServiceTechnicianID

  /**
   * @description Party Type
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  ServiceTechnicianTypeCode

  /**
   * @description ServiceTechnicianTypeCodeText
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  ServiceTechnicianTypeCodeText

  /**
   * @description Scheduled Start Date Time
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceAssignment
   */
  StartDateTime

  /**
   * @description StartDateTimeZoneCode
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  StartDateTimeZoneCode

  /**
   * @description StartDateTimeZoneCodeText
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  StartDateTimeZoneCodeText

  /**
   * @description Assignment External Status Code
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  Status

  /**
   * @description StatusText
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  StatusText

  /**
   * @description Subject
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  Subject

  /**
   * @description Activity Type
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof ServiceAssignment
   */
  TypeCodeText

  /**
   * @type {ServiceAssignmentBusinessTransactionDocReference|ServiceAssignmentBusinessTransactionDocReference[]} 
   * @memberof ServiceAssignment
   */
  ServiceAssignmentBusinessTransactionDocReference
}

export class ServiceAssignmentBusinessTransactionDocReference extends C4CODataType {

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceAssignmentBusinessTransactionDocReference
   */
  ETag

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ServiceAssignmentBusinessTransactionDocReference
   */
  ObjectID

  /**
   * @description Document ID
   * @type {Edm.String} 
   * @memberof ServiceAssignmentBusinessTransactionDocReference
   */
  ReferenceDocumentID

  /**
   * @description Reference Item
   * @type {Edm.String} 
   * @memberof ServiceAssignmentBusinessTransactionDocReference
   */
  ReferenceDocumentItemID

  /**
   * @description Reference Type
   * @type {Edm.String} 
   * @memberof ServiceAssignmentBusinessTransactionDocReference
   */
  ReferenceDocumentItemTypeCode

  /**
   * @description ReferenceDocumentItemTypeCodeText
   * @type {Edm.String} 
   * @memberof ServiceAssignmentBusinessTransactionDocReference
   */
  ReferenceDocumentItemTypeCodeText

  /**
   * @description ReferenceDocumentItemUUID
   * @type {Edm.Guid} 
   * @memberof ServiceAssignmentBusinessTransactionDocReference
   */
  ReferenceDocumentItemUUID

  /**
   * @description Source Document
   * @type {Edm.String} 
   * @memberof ServiceAssignmentBusinessTransactionDocReference
   */
  ReferenceDocumentTypeCode

  /**
   * @description ReferenceDocumentTypeCodeText
   * @type {Edm.String} 
   * @memberof ServiceAssignmentBusinessTransactionDocReference
   */
  ReferenceDocumentTypeCodeText

  /**
   * @description ReferenceDocumentUUID
   * @type {Edm.Guid} 
   * @memberof ServiceAssignmentBusinessTransactionDocReference
   */
  ReferenceDocumentUUID
}

export class ServiceIssueCategoryCatalogue extends C4CODataType {

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceIssueCategoryCatalogue
   */
  ETag

  /**
   * @description Valid To
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceIssueCategoryCatalogue
   */
  EndDateTime

  /**
   * @description LifeCycleStatusCode
   * @type {Edm.String} 
   * @memberof ServiceIssueCategoryCatalogue
   */
  LifeCycleStatusCode

  /**
   * @description LifeCycleStatusCodeText
   * @type {Edm.String} 
   * @memberof ServiceIssueCategoryCatalogue
   */
  LifeCycleStatusCodeText

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ServiceIssueCategoryCatalogue
   */
  ObjectID

  /**
   * @description Main Personal Address
   * @type {Edm.Boolean} 
   * @memberof ServiceIssueCategoryCatalogue
   */
  ShowActive

  /**
   * @description Valid From
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceIssueCategoryCatalogue
   */
  StartDateTime

  /**
   * @description Version
   * @type {Edm.String} 
   * @memberof ServiceIssueCategoryCatalogue
   */
  VersionID

  /**
   * @type {ServiceIssueCategoryCatalogueCategory|ServiceIssueCategoryCatalogueCategory[]} 
   * @memberof ServiceIssueCategoryCatalogue
   */
  ServiceIssueCategoryCatalogueCategory

  /**
   * @type {ServiceIssueCategoryCatalogueParentCategory|ServiceIssueCategoryCatalogueParentCategory[]} 
   * @memberof ServiceIssueCategoryCatalogue
   */
  ServiceIssueCategoryCatalogueParentCategory
}

export class ServiceIssueCategoryCatalogueCategory extends C4CODataType {

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceIssueCategoryCatalogueCategory
   */
  ETag

  /**
   * @description Name
   * @type {c4codata.MEDIUM_Name} 
   * @memberof ServiceIssueCategoryCatalogueCategory
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ServiceIssueCategoryCatalogueCategory
   */
  ObjectID

  /**
   * @description ParentCategoryUUID
   * @type {Edm.Guid} 
   * @memberof ServiceIssueCategoryCatalogueCategory
   */
  ParentCategoryUUID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof ServiceIssueCategoryCatalogueCategory
   */
  ParentObjectID

  /**
   * @description ServiceIssueCategoryID
   * @type {Edm.String} 
   * @memberof ServiceIssueCategoryCatalogueCategory
   */
  ServiceIssueCategoryID

  /**
   * @description TypeCode
   * @type {Edm.String} 
   * @memberof ServiceIssueCategoryCatalogueCategory
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof ServiceIssueCategoryCatalogueCategory
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof ServiceIssueCategoryCatalogueCategory
   */
  UUID

  /**
   * @type {ServiceIssueCategoryCatalogue|ServiceIssueCategoryCatalogue[]} 
   * @memberof ServiceIssueCategoryCatalogueCategory
   */
  ServiceIssueCategoryCatalogue
}

export class ServiceIssueCategoryCatalogueParentCategory extends C4CODataType {

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceIssueCategoryCatalogueParentCategory
   */
  ETag

  /**
   * @description Name
   * @type {c4codata.MEDIUM_Name} 
   * @memberof ServiceIssueCategoryCatalogueParentCategory
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ServiceIssueCategoryCatalogueParentCategory
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof ServiceIssueCategoryCatalogueParentCategory
   */
  ParentObjectID

  /**
   * @description ServiceIssueCategoryID
   * @type {Edm.String} 
   * @memberof ServiceIssueCategoryCatalogueParentCategory
   */
  ServiceIssueCategoryID

  /**
   * @description TypeCode
   * @type {Edm.String} 
   * @memberof ServiceIssueCategoryCatalogueParentCategory
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof ServiceIssueCategoryCatalogueParentCategory
   */
  TypeCodeText

  /**
   * @type {ServiceIssueCategoryCatalogue|ServiceIssueCategoryCatalogue[]} 
   * @memberof ServiceIssueCategoryCatalogueParentCategory
   */
  ServiceIssueCategoryCatalogue
}

export class ServicePointLocationAddress extends C4CODataType {

  /**
   * @description AddressLine1
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  AddressLine1

  /**
   * @description AddressLine2
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  AddressLine2

  /**
   * @description AddressLine4
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  AddressLine4

  /**
   * @description AddressLine5
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  AddressLine5

  /**
   * @description City
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  City

  /**
   * @description Country
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  Country

  /**
   * @description CountryText
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  CountryText

  /**
   * @description County
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  County

  /**
   * @description District
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  District

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  Email

  /**
   * @description Fax
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  Fax

  /**
   * @description House Number
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  HouseNumber

  /**
   * @description Language
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  Language

  /**
   * @description LanguageText
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  LanguageText

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  Mobile

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  ObjectID

  /**
   * @description POBox
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  POBox

  /**
   * @description Postal Code
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  POBoxPostalCode

  /**
   * @description POBoxPostalCodeText
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  POBoxPostalCodeText

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  ParentObjectID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  Phone

  /**
   * @description Postal Code
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  PostalCode

  /**
   * @description PostalCodeText
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  PostalCodeText

  /**
   * @description State
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  State

  /**
   * @description StateText
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  StateText

  /**
   * @description Street
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  Street

  /**
   * @description Web Site
   * @type {Edm.String} 
   * @memberof ServicePointLocationAddress
   */
  WebSite
}

export class ServiceRequest extends C4CODataType {

  /**
   * @description 接收时间
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceRequest
   */
  AcceptedTime

  /**
   * @description ActivityCategoryName
   * @type {c4codata.MEDIUM_Name} 
   * @memberof ServiceRequest
   */
  ActivityCategoryName

  /**
   * @description ActivityServiceIssueCategoryID
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ActivityServiceIssueCategoryID

  /**
   * @description 预约改派时间
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceRequest
   */
  AppointChangedTime

  /**
   * @description 确认预约的时间
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceRequest
   */
  AppointConfirmedTime

  /**
   * @description 确认预约状态
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  AppointStatus

  /**
   * @description AppointStatusText
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  AppointStatusText

  /**
   * @description 预约进站时间
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceRequest
   */
  AppointTime

  /**
   * @description ApprovalStatusCode
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ApprovalStatusCode

  /**
   * @description ApprovalStatusCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ApprovalStatusCodeText

  /**
   * @description AssignedTo
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  AssignedTo

  /**
   * @description AssignedToName
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof ServiceRequest
   */
  AssignedToName

  /**
   * @description 派发时间
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceRequest
   */
  AssigningTime

  /**
   * @description 审核状态
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  AuditStatus

  /**
   * @description AuditStatusText
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  AuditStatusText

  /**
   * @description AutoOutCall
   * @type {Edm.Boolean} 
   * @memberof ServiceRequest
   */
  AutoOutCall

  /**
   * @description 已取消
   * @type {Edm.Boolean} 
   * @memberof ServiceRequest
   */
  Cancelled

  /**
   * @description 取消原因
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  CancelledReason

  /**
   * @description 取消时间
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceRequest
   */
  CancelledTime

  /**
   * @description 车型描述
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  Car_Desc

  /**
   * @description 车辆纬度
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  Car_Latitute

  /**
   * @description 车辆经度
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  Car_Longtitude

  /**
   * @description CauseCategoryName
   * @type {c4codata.MEDIUM_Name} 
   * @memberof ServiceRequest
   */
  CauseCategoryName

  /**
   * @description CauseServiceIssueCategoryID
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  CauseServiceIssueCategoryID

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ChangedBy

  /**
   * @description CharRecordIDcontent
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  CharRecordIDcontent

  /**
   * @description Warranty Reference Date
   * @type {Edm.DateTime} 
   * @memberof ServiceRequest
   */
  CompletedOnDate

  /**
   * @description 闭环时间
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceRequest
   */
  CompletedTime

  /**
   * @description Warranty Reference Date
   * @type {Edm.DateTime} 
   * @memberof ServiceRequest
   */
  CompletionDueDate

  /**
   * @description Contact
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  Contact

  /**
   * @description ContractID
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ContractID

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  CreatedBy

  /**
   * @description CreationDate
   * @type {Edm.DateTime} 
   * @memberof ServiceRequest
   */
  CreationDate

  /**
   * @description CreationDateTime
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceRequest
   */
  CreationDateTime

  /**
   * @description 当前处理部门
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  CurDept

  /**
   * @description 当前处理部门ID
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  CurDeptID

  /**
   * @description CurProcessorIDcontent
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  CurProcessorIDcontent

  /**
   * @description 当前处理人姓名
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  CurrentProcessor

  /**
   * @description Customer
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  Customer

  /**
   * @description CustomerID
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  CustomerID

  /**
   * @description Main Contact
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  CustomerMainContactPartyID

  /**
   * @description Origin
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  DataOriginTypeCode

  /**
   * @description DataOriginTypeCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  DataOriginTypeCodeText

  /**
   * @description 拒绝原因
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  DeclinedReason

  /**
   * @description 拒绝时间
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceRequest
   */
  DeclinedTime

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceRequest
   */
  ETag

  /**
   * @description EscalationStatus
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  EscalationStatus

  /**
   * @description EscalationStatusText
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  EscalationStatusText

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ID

  /**
   * @description IncidentCategoryName
   * @type {c4codata.MEDIUM_Name} 
   * @memberof ServiceRequest
   */
  IncidentCategoryName

  /**
   * @description IncidentServiceIssueCategoryID
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  IncidentServiceIssueCategoryID

  /**
   * @description Warranty Reference Date
   * @type {Edm.DateTime} 
   * @memberof ServiceRequest
   */
  InitialResponseDate

  /**
   * @description Warranty Reference Date
   * @type {Edm.DateTime} 
   * @memberof ServiceRequest
   */
  InitialReviewDueDate

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  InstallationPointID

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  InstalledBaseID

  /**
   * @description 是否通知派发部门
   * @type {Edm.Boolean} 
   * @memberof ServiceRequest
   */
  IsNotifyAssignedTeam

  /**
   * @description 是否通知客户
   * @type {Edm.Boolean} 
   * @memberof ServiceRequest
   */
  IsNotifyCustomer

  /**
   * @description 是否通知大区
   * @type {Edm.Boolean} 
   * @memberof ServiceRequest
   */
  IsNotifyDQ

  /**
   * @description ItemListServiceRequestExecutionLifeCycleStatusCode
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ItemListServiceRequestExecutionLifeCycleStatusCode

  /**
   * @description ItemListServiceRequestExecutionLifeCycleStatusCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ItemListServiceRequestExecutionLifeCycleStatusCodeText

  /**
   * @description LastChangeDate
   * @type {Edm.DateTime} 
   * @memberof ServiceRequest
   */
  LastChangeDate

  /**
   * @description LastChangeDateTime
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceRequest
   */
  LastChangeDateTime

  /**
   * @description Warranty Reference Date
   * @type {Edm.DateTime} 
   * @memberof ServiceRequest
   */
  LastResponseOnDate

  /**
   * @description 车牌号
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  LicensePlateID

  /**
   * @description Name
   * @type {c4codata.EXTENDED_Name} 
   * @memberof ServiceRequest
   */
  Name

  /**
   * @description 需要下派维修
   * @type {Edm.Boolean} 
   * @memberof ServiceRequest
   */
  NeedRepair

  /**
   * @description 是否需要救援
   * @type {Edm.Boolean} 
   * @memberof ServiceRequest
   */
  NeedRescue

  /**
   * @description Warranty Reference Date
   * @type {Edm.DateTime} 
   * @memberof ServiceRequest
   */
  NextResponseDueDate

  /**
   * @description ObjectCategoryName
   * @type {c4codata.MEDIUM_Name} 
   * @memberof ServiceRequest
   */
  ObjectCategoryName

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ObjectID

  /**
   * @description ObjectServiceIssueCategoryID
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ObjectServiceIssueCategoryID

  /**
   * @description 里程数
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  OdometerReading

  /**
   * @description 外呼工单批次ID
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  OutCallID

  /**
   * @description ParentServiceRequest
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ParentServiceRequest

  /**
   * @description Partner
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  Partner

  /**
   * @description PartnerID
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  PartnerID

  /**
   * @description 手机号
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  PhoneNo

  /**
   * @description Ticket Type
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ProcessingTypeCode

  /**
   * @description ProcessingTypeCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ProcessingTypeCodeText

  /**
   * @description Product Category Description
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ProductCategoryDescription

  /**
   * @description ProductID
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ProductID

  /**
   * @description Warranty Reference Date
   * @type {Edm.DateTime} 
   * @memberof ServiceRequest
   */
  ReferenceDate

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ReportedForEmail

  /**
   * @description ReportedForPartyID
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ReportedForPartyID

  /**
   * @description ReporterEmail
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ReporterEmail

  /**
   * @description ReporterPartyID
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ReporterPartyID

  /**
   * @description 申请业务支持时间
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceRequest
   */
  RequesTime

  /**
   * @description Invoice Status
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  RequestAssignmentStatusCode

  /**
   * @description RequestAssignmentStatusCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  RequestAssignmentStatusCodeText

  /**
   * @description 申请闭环时间
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceRequest
   */
  RequestCompletedTime

  /**
   * @description RequestedEnd
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  RequestedEnd

  /**
   * @description RequestedEndTimeZoneCode
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  RequestedEndTimeZoneCode

  /**
   * @description RequestedEndTimeZoneCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  RequestedEndTimeZoneCodeText

  /**
   * @description Requested Date
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  RequestedStart

  /**
   * @description RequestedStartTimeZoneCode
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  RequestedStartTimeZoneCode

  /**
   * @description RequestedStartTimeZoneCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  RequestedStartTimeZoneCodeText

  /**
   * @description 是否符合救援
   * @type {Edm.Boolean} 
   * @memberof ServiceRequest
   */
  RescueCondition

  /**
   * @description 救援阶段类型
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  RescuedPhaseType

  /**
   * @description RescuedPhaseTypeText
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  RescuedPhaseTypeText

  /**
   * @description 救援人员纬度
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  Rescuer_Latitude

  /**
   * @description 救援人员经度
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  Rescuer_Longtitude

  /**
   * @description RoleCode
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  RoleCode

  /**
   * @description RoleCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  RoleCodeText

  /**
   * @description SalesTerritoryID
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  SalesTerritoryID

  /**
   * @description SerialID
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  SerialID

  /**
   * @description ServiceAndSupportTeam
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ServiceAndSupportTeam

  /**
   * @description ServiceCategoryName
   * @type {c4codata.MEDIUM_Name} 
   * @memberof ServiceRequest
   */
  ServiceCategoryName

  /**
   * @description Service Category
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ServiceIssueCategoryID

  /**
   * @description ServiceLevelAgreement
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ServiceLevelAgreement

  /**
   * @description Priority
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ServicePriorityCode

  /**
   * @description ServicePriorityCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ServicePriorityCodeText

  /**
   * @description Service Request Classification
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ServiceRequestClassificationCode

  /**
   * @description ServiceRequestClassificationCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ServiceRequestClassificationCodeText

  /**
   * @description ServiceRequestLifeCycleStatusCode
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ServiceRequestLifeCycleStatusCode

  /**
   * @description ServiceRequestLifeCycleStatusCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ServiceRequestLifeCycleStatusCodeText

  /**
   * @description Status
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ServiceRequestUserLifeCycleStatusCode

  /**
   * @description ServiceRequestUserLifeCycleStatusCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ServiceRequestUserLifeCycleStatusCodeText

  /**
   * @description ServiceTechnician
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ServiceTechnician

  /**
   * @description ServiceTechnicianTeam
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  ServiceTechnicianTeam

  /**
   * @description 特殊标记
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  SpecialMark

  /**
   * @description SpecialMarkText
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  SpecialMarkText

  /**
   * @description 业务支持状态
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  SupportStatus

  /**
   * @description SupportStatusText
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  SupportStatusText

  /**
   * @description VIN码
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  VINID

  /**
   * @description VOC-Id
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  VOCId

  /**
   * @description VOC
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  VOCName

  /**
   * @description Product Description
   * @type {Edm.String} 
   * @memberof ServiceRequest
   */
  WarrantyDescription

  /**
   * @description Warranty From
   * @type {Edm.DateTime} 
   * @memberof ServiceRequest
   */
  WarrantyFrom

  /**
   * @description Warranty Until
   * @type {Edm.DateTime} 
   * @memberof ServiceRequest
   */
  WarrantyTo

  /**
   * @type {ServicePointLocationAddress|ServicePointLocationAddress[]} 
   * @memberof ServiceRequest
   */
  ServicePointLocationAddress

  /**
   * @type {ServiceRequestAttachmentFolder|ServiceRequestAttachmentFolder[]} 
   * @memberof ServiceRequest
   */
  ServiceRequestAttachmentFolder

  /**
   * @type {ServiceRequestBusinessTransactionDocumentReference|ServiceRequestBusinessTransactionDocumentReference[]} 
   * @memberof ServiceRequest
   */
  ServiceRequestBusinessTransactionDocumentReference

  /**
   * @type {ServiceRequestDescription|ServiceRequestDescription[]} 
   * @memberof ServiceRequest
   */
  ServiceRequestDescription

  /**
   * @type {ServiceRequestHistoricalVersion|ServiceRequestHistoricalVersion[]} 
   * @memberof ServiceRequest
   */
  ServiceRequestHistoricalVersion

  /**
   * @type {ServiceRequestItem|ServiceRequestItem[]} 
   * @memberof ServiceRequest
   */
  ServiceRequestItem
}

export class ServiceRequestAttachmentFolder extends C4CODataType {

  /**
   * @description Binary
   * @type {Edm.Binary} 
   * @memberof ServiceRequestAttachmentFolder
   */
  Binary

  /**
   * @description Category Code
   * @type {Edm.String} 
   * @memberof ServiceRequestAttachmentFolder
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequestAttachmentFolder
   */
  CategoryCodeText

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof ServiceRequestAttachmentFolder
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof ServiceRequestAttachmentFolder
   */
  CreatedOn

  /**
   * @description Document Link
   * @type {Edm.String} 
   * @memberof ServiceRequestAttachmentFolder
   */
  DocumentLink

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceRequestAttachmentFolder
   */
  ETag

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof ServiceRequestAttachmentFolder
   */
  LastUpdatedBy

  /**
   * @description Last Updated On
   * @type {Edm.DateTime} 
   * @memberof ServiceRequestAttachmentFolder
   */
  LastUpdatedOn

  /**
   * @description Link Web URI
   * @type {Edm.String} 
   * @memberof ServiceRequestAttachmentFolder
   */
  LinkWebURI

  /**
   * @description Mime Type
   * @type {Edm.String} 
   * @memberof ServiceRequestAttachmentFolder
   */
  MimeType

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof ServiceRequestAttachmentFolder
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ServiceRequestAttachmentFolder
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof ServiceRequestAttachmentFolder
   */
  ParentObjectID

  /**
   * @description Size In KiloBytes
   * @type {Edm.Decimal} 
   * @memberof ServiceRequestAttachmentFolder
   */
  SizeInkB

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof ServiceRequestAttachmentFolder
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequestAttachmentFolder
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof ServiceRequestAttachmentFolder
   */
  UUID
}

export class ServiceRequestBusinessTransactionDocumentReference extends C4CODataType {

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceRequestBusinessTransactionDocumentReference
   */
  ETag

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof ServiceRequestBusinessTransactionDocumentReference
   */
  ID

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ServiceRequestBusinessTransactionDocumentReference
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof ServiceRequestBusinessTransactionDocumentReference
   */
  ParentObjectID

  /**
   * @description RoleCode
   * @type {Edm.String} 
   * @memberof ServiceRequestBusinessTransactionDocumentReference
   */
  RoleCode

  /**
   * @description RoleCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequestBusinessTransactionDocumentReference
   */
  RoleCodeText

  /**
   * @description Channel Type
   * @type {Edm.String} 
   * @memberof ServiceRequestBusinessTransactionDocumentReference
   */
  SocialMediaChannelCode

  /**
   * @description SocialMediaChannelCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequestBusinessTransactionDocumentReference
   */
  SocialMediaChannelCodeText

  /**
   * @description Activity Type
   * @type {Edm.String} 
   * @memberof ServiceRequestBusinessTransactionDocumentReference
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequestBusinessTransactionDocumentReference
   */
  TypeCodeText

  /**
   * @type {ServiceRequest|ServiceRequest[]} 
   * @memberof ServiceRequestBusinessTransactionDocumentReference
   */
  ServiceRequest
}

export class ServiceRequestDescription extends C4CODataType {

  /**
   * @description Author Name
   * @type {Edm.String} 
   * @memberof ServiceRequestDescription
   */
  AuthorName

  /**
   * @description Author UUID
   * @type {Edm.Guid} 
   * @memberof ServiceRequestDescription
   */
  AuthorUUID

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof ServiceRequestDescription
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof ServiceRequestDescription
   */
  CreatedOn

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceRequestDescription
   */
  ETag

  /**
   * @description Language Code
   * @type {Edm.String} 
   * @memberof ServiceRequestDescription
   */
  LanguageCode

  /**
   * @description LanguageCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequestDescription
   */
  LanguageCodeText

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof ServiceRequestDescription
   */
  LastUpdatedBy

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ServiceRequestDescription
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof ServiceRequestDescription
   */
  ParentObjectID

  /**
   * @description Text
   * @type {Edm.String} 
   * @memberof ServiceRequestDescription
   */
  Text

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof ServiceRequestDescription
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequestDescription
   */
  TypeCodeText

  /**
   * @description Updated On
   * @type {Edm.DateTime} 
   * @memberof ServiceRequestDescription
   */
  UpdatedOn
}

export class ServiceRequestHistoricalVersion extends C4CODataType {

  /**
   * @description ETag
   * @type {Edm.String} 
   * @memberof ServiceRequestHistoricalVersion
   */
  ETag

  /**
   * @description EndDateTime
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceRequestHistoricalVersion
   */
  EndDateTime

  /**
   * @description EscalationStatusCode
   * @type {Edm.String} 
   * @memberof ServiceRequestHistoricalVersion
   */
  EscalationStatusCode

  /**
   * @description EscalationStatusCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequestHistoricalVersion
   */
  EscalationStatusCodeText

  /**
   * @description MainIncidentServiceIssueCategoryCatalogueID
   * @type {Edm.String} 
   * @memberof ServiceRequestHistoricalVersion
   */
  MainIncidentServiceIssueCategoryCatalogueID

  /**
   * @description MainIncidentServiceIssueCategoryID
   * @type {Edm.String} 
   * @memberof ServiceRequestHistoricalVersion
   */
  MainIncidentServiceIssueCategoryID

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ServiceRequestHistoricalVersion
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof ServiceRequestHistoricalVersion
   */
  ParentObjectID

  /**
   * @description ProcessorPartyUUID
   * @type {Edm.Guid} 
   * @memberof ServiceRequestHistoricalVersion
   */
  ProcessorPartyUUID

  /**
   * @description SalesAndServiceBusinessAreaServiceOrganisationUUID
   * @type {Edm.Guid} 
   * @memberof ServiceRequestHistoricalVersion
   */
  SalesAndServiceBusinessAreaServiceOrganisationUUID

  /**
   * @description ServiceRequestLifeCycleStatusCode
   * @type {Edm.String} 
   * @memberof ServiceRequestHistoricalVersion
   */
  ServiceRequestLifeCycleStatusCode

  /**
   * @description ServiceRequestLifeCycleStatusCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequestHistoricalVersion
   */
  ServiceRequestLifeCycleStatusCodeText

  /**
   * @description ServiceSupportTeamPartyUUID
   * @type {Edm.Guid} 
   * @memberof ServiceRequestHistoricalVersion
   */
  ServiceSupportTeamPartyUUID

  /**
   * @description ServiceTermsServiceIssueCategoryCatalogueID
   * @type {Edm.String} 
   * @memberof ServiceRequestHistoricalVersion
   */
  ServiceTermsServiceIssueCategoryCatalogueID

  /**
   * @description ServiceTermsServiceIssueCategoryID
   * @type {Edm.String} 
   * @memberof ServiceRequestHistoricalVersion
   */
  ServiceTermsServiceIssueCategoryID

  /**
   * @description ServiceTermsServicePriorityCode
   * @type {Edm.String} 
   * @memberof ServiceRequestHistoricalVersion
   */
  ServiceTermsServicePriorityCode

  /**
   * @description ServiceTermsServicePriorityCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequestHistoricalVersion
   */
  ServiceTermsServicePriorityCodeText

  /**
   * @description ServiceTermsServiceRequestUserLifeCycleStatusCode
   * @type {Edm.String} 
   * @memberof ServiceRequestHistoricalVersion
   */
  ServiceTermsServiceRequestUserLifeCycleStatusCode

  /**
   * @description ServiceTermsServiceRequestUserLifeCycleStatusCodeText
   * @type {Edm.String} 
   * @memberof ServiceRequestHistoricalVersion
   */
  ServiceTermsServiceRequestUserLifeCycleStatusCodeText

  /**
   * @description StartDateTime
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceRequestHistoricalVersion
   */
  StartDateTime

  /**
   * @type {ServiceRequest|ServiceRequest[]} 
   * @memberof ServiceRequestHistoricalVersion
   */
  ServiceRequest
}

export class ServiceRequestInteraction extends C4CODataType {

  /**
   * @description InteractionType
   * @type {Edm.String} 
   * @memberof ServiceRequestInteraction
   */
  InteractionType

  /**
   * @description InteractionUUID
   * @type {Edm.String} 
   * @memberof ServiceRequestInteraction
   */
  InteractionUUID

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ServiceRequestInteraction
   */
  ObjectID

  /**
   * @description ServiceRequestObjectID
   * @type {Edm.String} 
   * @memberof ServiceRequestInteraction
   */
  ServiceRequestObjectID
}

export class ServiceRequestItem extends C4CODataType {

  /**
   * @description Description
   * @type {Edm.String} 
   * @memberof ServiceRequestItem
   */
  Description

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceRequestItem
   */
  ETag

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ServiceRequestItem
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof ServiceRequestItem
   */
  ParentObjectID

  /**
   * @description Product Category Description
   * @type {Edm.String} 
   * @memberof ServiceRequestItem
   */
  ProductCategoryDescription

  /**
   * @description Product Description
   * @type {Edm.String} 
   * @memberof ServiceRequestItem
   */
  ProductDescription

  /**
   * @description ProductID
   * @type {Edm.String} 
   * @memberof ServiceRequestItem
   */
  ProductID

  /**
   * @type {ServiceRequest|ServiceRequest[]} 
   * @memberof ServiceRequestItem
   */
  ServiceRequest

  /**
   * @type {ServiceRequestItemScheduleLine|ServiceRequestItemScheduleLine[]} 
   * @memberof ServiceRequestItem
   */
  ServiceRequestItemScheduleLine
}

export class ServiceRequestItemScheduleLine extends C4CODataType {

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof ServiceRequestItemScheduleLine
   */
  ETag

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof ServiceRequestItemScheduleLine
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof ServiceRequestItemScheduleLine
   */
  ParentObjectID

  /**
   * @description Quantity
   * @type {c4codata.Quantity} 
   * @memberof ServiceRequestItemScheduleLine
   */
  Quantity

  /**
   * @description Type
   * @type {Edm.String} 
   * @memberof ServiceRequestItemScheduleLine
   */
  Type

  /**
   * @description TypeText
   * @type {Edm.String} 
   * @memberof ServiceRequestItemScheduleLine
   */
  TypeText

  /**
   * @type {ServiceRequest|ServiceRequest[]} 
   * @memberof ServiceRequestItemScheduleLine
   */
  ServiceRequest

  /**
   * @type {ServiceRequestItem|ServiceRequestItem[]} 
   * @memberof ServiceRequestItemScheduleLine
   */
  ServiceRequestItem
}

export class Task extends C4CODataType {

  /**
   * @description Account
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof Task
   */
  Account

  /**
   * @description Account ID
   * @type {Edm.String} 
   * @memberof Task
   */
  AccountID

  /**
   * @description Account UUID
   * @type {Edm.Guid} 
   * @memberof Task
   */
  AccountUUID

  /**
   * @description Category
   * @type {Edm.String} 
   * @memberof Task
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof Task
   */
  CategoryCodeText

  /**
   * @description Date Completed
   * @type {Edm.DateTimeOffset} 
   * @memberof Task
   */
  CompletionDateTime

  /**
   * @description Completion (%)
   * @type {Edm.Decimal} 
   * @memberof Task
   */
  CompletionPercent

  /**
   * @description Data Origin
   * @type {Edm.String} 
   * @memberof Task
   */
  DataOriginTypeCode

  /**
   * @description DataOriginTypeCodeText
   * @type {Edm.String} 
   * @memberof Task
   */
  DataOriginTypeCodeText

  /**
   * @description Due Date/Time
   * @type {c4codata.LOCALNORMALISED_DateTime} 
   * @memberof Task
   */
  DueDateTime

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof Task
   */
  ETag

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof Task
   */
  ID

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof Task
   */
  ObjectID

  /**
   * @description Owner
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof Task
   */
  Owner

  /**
   * @description Owner UUID
   * @type {Edm.Guid} 
   * @memberof Task
   */
  OwnerUUID

  /**
   * @description Primary Contact
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof Task
   */
  PrimaryContact

  /**
   * @description Primary Contact ID
   * @type {Edm.String} 
   * @memberof Task
   */
  PrimaryContactID

  /**
   * @description Primary Contact UUID
   * @type {Edm.Guid} 
   * @memberof Task
   */
  PrimaryContactUUID

  /**
   * @description Priority
   * @type {Edm.String} 
   * @memberof Task
   */
  PriorityCode

  /**
   * @description PriorityCodeText
   * @type {Edm.String} 
   * @memberof Task
   */
  PriorityCodeText

  /**
   * @description Processor
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof Task
   */
  Processor

  /**
   * @description Processor Email
   * @type {Edm.String} 
   * @memberof Task
   */
  ProcessorEmailURI

  /**
   * @description Processor ID
   * @type {Edm.String} 
   * @memberof Task
   */
  ProcessorID

  /**
   * @description Processor Name
   * @type {Edm.String} 
   * @memberof Task
   */
  ProcessorPartyName

  /**
   * @description Processor UUID
   * @type {Edm.Guid} 
   * @memberof Task
   */
  ProcessorUUID

  /**
   * @description Reported Date Time
   * @type {Edm.DateTimeOffset} 
   * @memberof Task
   */
  ReportedDateTime

  /**
   * @description Start Date/Time
   * @type {c4codata.LOCALNORMALISED_DateTime} 
   * @memberof Task
   */
  StartDateTime

  /**
   * @description Status
   * @type {Edm.String} 
   * @memberof Task
   */
  StatusCode

  /**
   * @description StatusCodeText
   * @type {Edm.String} 
   * @memberof Task
   */
  StatusCodeText

  /**
   * @description Subject
   * @type {Edm.String} 
   * @memberof Task
   */
  Subject

  /**
   * @description Activity Type
   * @type {Edm.String} 
   * @memberof Task
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof Task
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof Task
   */
  UUID

  /**
   * @type {TaskAttachment|TaskAttachment[]} 
   * @memberof Task
   */
  TaskAttachment

  /**
   * @type {TaskInvolvedParties|TaskInvolvedParties[]} 
   * @memberof Task
   */
  TaskInvolvedParties

  /**
   * @type {TaskNotes|TaskNotes[]} 
   * @memberof Task
   */
  TaskNotes
}

export class TaskAttachment extends C4CODataType {

  /**
   * @description Binary
   * @type {Edm.Binary} 
   * @memberof TaskAttachment
   */
  Binary

  /**
   * @description Category Code
   * @type {Edm.String} 
   * @memberof TaskAttachment
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof TaskAttachment
   */
  CategoryCodeText

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof TaskAttachment
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof TaskAttachment
   */
  CreatedOn

  /**
   * @description Document Link
   * @type {Edm.String} 
   * @memberof TaskAttachment
   */
  DocumentLink

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof TaskAttachment
   */
  ETag

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof TaskAttachment
   */
  LastUpdatedBy

  /**
   * @description Last Updated On
   * @type {Edm.DateTime} 
   * @memberof TaskAttachment
   */
  LastUpdatedOn

  /**
   * @description Link Web URI
   * @type {Edm.String} 
   * @memberof TaskAttachment
   */
  LinkWebURI

  /**
   * @description Mime Type
   * @type {Edm.String} 
   * @memberof TaskAttachment
   */
  MimeType

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof TaskAttachment
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof TaskAttachment
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof TaskAttachment
   */
  ParentObjectID

  /**
   * @description Size In KiloBytes
   * @type {Edm.Decimal} 
   * @memberof TaskAttachment
   */
  SizeInkB

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof TaskAttachment
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof TaskAttachment
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof TaskAttachment
   */
  UUID
}

export class TaskInvolvedParties extends C4CODataType {

  /**
   * @description Address
   * @type {Edm.String} 
   * @memberof TaskInvolvedParties
   */
  Address

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof TaskInvolvedParties
   */
  EMail

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof TaskInvolvedParties
   */
  ETag

  /**
   * @description Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   * @memberof TaskInvolvedParties
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof TaskInvolvedParties
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof TaskInvolvedParties
   */
  ParentObjectID

  /**
   * @description Party Email
   * @type {Edm.String} 
   * @memberof TaskInvolvedParties
   */
  PartyEmailURI

  /**
   * @description PartyID
   * @type {Edm.String} 
   * @memberof TaskInvolvedParties
   */
  PartyID

  /**
   * @description Party Name
   * @type {Edm.String} 
   * @memberof TaskInvolvedParties
   */
  PartyName

  /**
   * @description PartyUUID
   * @type {Edm.Guid} 
   * @memberof TaskInvolvedParties
   */
  PartyUUID

  /**
   * @description Phone
   * @type {Edm.String} 
   * @memberof TaskInvolvedParties
   */
  Phone

  /**
   * @description RoleCategoryCode
   * @type {Edm.String} 
   * @memberof TaskInvolvedParties
   */
  RoleCategoryCode

  /**
   * @description RoleCategoryCodeText
   * @type {Edm.String} 
   * @memberof TaskInvolvedParties
   */
  RoleCategoryCodeText

  /**
   * @description RoleCode
   * @type {Edm.String} 
   * @memberof TaskInvolvedParties
   */
  RoleCode

  /**
   * @description RoleCodeText
   * @type {Edm.String} 
   * @memberof TaskInvolvedParties
   */
  RoleCodeText

  /**
   * @type {Task|Task[]} 
   * @memberof TaskInvolvedParties
   */
  Task
}

export class TaskNotes extends C4CODataType {

  /**
   * @description Author Name
   * @type {Edm.String} 
   * @memberof TaskNotes
   */
  AuthorName

  /**
   * @description Author UUID
   * @type {Edm.Guid} 
   * @memberof TaskNotes
   */
  AuthorUUID

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof TaskNotes
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof TaskNotes
   */
  CreatedOn

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof TaskNotes
   */
  ETag

  /**
   * @description Language Code
   * @type {Edm.String} 
   * @memberof TaskNotes
   */
  LanguageCode

  /**
   * @description LanguageCodeText
   * @type {Edm.String} 
   * @memberof TaskNotes
   */
  LanguageCodeText

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof TaskNotes
   */
  LastUpdatedBy

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof TaskNotes
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof TaskNotes
   */
  ParentObjectID

  /**
   * @description Text
   * @type {Edm.String} 
   * @memberof TaskNotes
   */
  Text

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof TaskNotes
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof TaskNotes
   */
  TypeCodeText

  /**
   * @description Updated On
   * @type {Edm.DateTime} 
   * @memberof TaskNotes
   */
  UpdatedOn
}

export class TimeEntry extends C4CODataType {

  /**
   * @description AutoTimeRecordingIndicator
   * @type {Edm.Boolean} 
   * @memberof TimeEntry
   */
  AutoTimeRecordingIndicator

  /**
   * @description BillingRelevanceIndicator
   * @type {Edm.Boolean} 
   * @memberof TimeEntry
   */
  BillingRelevanceIndicator

  /**
   * @description BusinessTransactionDocumentTypeCode
   * @type {Edm.String} 
   * @memberof TimeEntry
   */
  BusinessTransactionDocumentTypeCode

  /**
   * @description BusinessTransactionDocumentTypeCodeText
   * @type {Edm.String} 
   * @memberof TimeEntry
   */
  BusinessTransactionDocumentTypeCodeText

  /**
   * @description Date
   * @type {Edm.DateTime} 
   * @memberof TimeEntry
   */
  Date

  /**
   * @description Description
   * @type {c4codata.EXTENDED_Name} 
   * @memberof TimeEntry
   */
  Description

  /**
   * @description Duration
   * @type {Edm.String} 
   * @memberof TimeEntry
   */
  Duration

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof TimeEntry
   */
  ETag

  /**
   * @description EmployeeUUID
   * @type {Edm.Guid} 
   * @memberof TimeEntry
   */
  EmployeeUUID

  /**
   * @description EndDateTime
   * @type {Edm.Time} 
   * @memberof TimeEntry
   */
  EndDateTime

  /**
   * @description HeaderReferenceUUID
   * @type {Edm.Guid} 
   * @memberof TimeEntry
   */
  HeaderReferenceUUID

  /**
   * @description ItemReferenceUUID
   * @type {Edm.Guid} 
   * @memberof TimeEntry
   */
  ItemReferenceUUID

  /**
   * @description LifeCycleStatusCode
   * @type {Edm.String} 
   * @memberof TimeEntry
   */
  LifeCycleStatusCode

  /**
   * @description LifeCycleStatusCodeText
   * @type {Edm.String} 
   * @memberof TimeEntry
   */
  LifeCycleStatusCodeText

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof TimeEntry
   */
  ObjectID

  /**
   * @description StartDateTime
   * @type {Edm.Time} 
   * @memberof TimeEntry
   */
  StartDateTime

  /**
   * @description TimeReportUUID
   * @type {Edm.Guid} 
   * @memberof TimeEntry
   */
  TimeReportUUID

  /**
   * @description Time Type
   * @type {Edm.String} 
   * @memberof TimeEntry
   */
  TimeTypeCode

  /**
   * @description TimeTypeCodeText
   * @type {Edm.String} 
   * @memberof TimeEntry
   */
  TimeTypeCodeText

  /**
   * @description TimeZone
   * @type {Edm.String} 
   * @memberof TimeEntry
   */
  TimeZone

  /**
   * @description TimeZoneText
   * @type {Edm.String} 
   * @memberof TimeEntry
   */
  TimeZoneText

  /**
   * @type {Employee|Employee[]} 
   * @memberof TimeEntry
   */
  Employee

  /**
   * @type {ServiceRequest|ServiceRequest[]} 
   * @memberof TimeEntry
   */
  ServiceRequest

  /**
   * @type {TimeEntryItem|TimeEntryItem[]} 
   * @memberof TimeEntry
   */
  TimeEntryItem

  /**
   * @type {TimeReport|TimeReport[]} 
   * @memberof TimeEntry
   */
  TimeReport
}

export class TimeEntryItem extends C4CODataType {

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof TimeEntryItem
   */
  ETag

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof TimeEntryItem
   */
  ID

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof TimeEntryItem
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof TimeEntryItem
   */
  ParentObjectID

  /**
   * @description ProductID
   * @type {Edm.String} 
   * @memberof TimeEntryItem
   */
  ProductID

  /**
   * @description ServiceItemUUID
   * @type {Edm.Guid} 
   * @memberof TimeEntryItem
   */
  ServiceItemUUID

  /**
   * @description TimeItemDuration
   * @type {Edm.String} 
   * @memberof TimeEntryItem
   */
  TimeItemDuration

  /**
   * @description TimeItemEndDate
   * @type {Edm.DateTime} 
   * @memberof TimeEntryItem
   */
  TimeItemEndDate

  /**
   * @description TimeItemEndTime
   * @type {Edm.Time} 
   * @memberof TimeEntryItem
   */
  TimeItemEndTime

  /**
   * @description TimeItemStartDate
   * @type {Edm.DateTime} 
   * @memberof TimeEntryItem
   */
  TimeItemStartDate

  /**
   * @description TimeItemStartTime
   * @type {Edm.Time} 
   * @memberof TimeEntryItem
   */
  TimeItemStartTime

  /**
   * @description TimeItemUUID
   * @type {Edm.Guid} 
   * @memberof TimeEntryItem
   */
  TimeItemUUID

  /**
   * @description TimeZoneCode
   * @type {Edm.String} 
   * @memberof TimeEntryItem
   */
  TimeZoneCode

  /**
   * @description TimeZoneCodeText
   * @type {Edm.String} 
   * @memberof TimeEntryItem
   */
  TimeZoneCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof TimeEntryItem
   */
  UUID

  /**
   * @type {TimeEntry|TimeEntry[]} 
   * @memberof TimeEntryItem
   */
  TimeEntry
}

export class TimeReport extends C4CODataType {

  /**
   * @description Description
   * @type {c4codata.EXTENDED_Name} 
   * @memberof TimeReport
   */
  Description

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof TimeReport
   */
  ETag

  /**
   * @description EmployeeUUID
   * @type {Edm.Guid} 
   * @memberof TimeReport
   */
  EmployeeUUID

  /**
   * @description End Date
   * @type {Edm.DateTime} 
   * @memberof TimeReport
   */
  EndDate

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof TimeReport
   */
  ObjectID

  /**
   * @description RejectionReason
   * @type {c4codata.Text} 
   * @memberof TimeReport
   */
  RejectionReason

  /**
   * @description ReportName
   * @type {c4codata.EXTENDED_Name} 
   * @memberof TimeReport
   */
  ReportName

  /**
   * @description StartDate
   * @type {Edm.DateTime} 
   * @memberof TimeReport
   */
  StartDate

  /**
   * @description Status
   * @type {Edm.String} 
   * @memberof TimeReport
   */
  Status

  /**
   * @description StatusText
   * @type {Edm.String} 
   * @memberof TimeReport
   */
  StatusText

  /**
   * @description TotalDuration
   * @type {Edm.String} 
   * @memberof TimeReport
   */
  TotalDuration

  /**
   * @type {Employee|Employee[]} 
   * @memberof TimeReport
   */
  Employee

  /**
   * @type {TimeEntry|TimeEntry[]} 
   * @memberof TimeReport
   */
  TimeEntry
}

export class User extends C4CODataType {

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof User
   */
  ChangedBy

  /**
   * @description Changed By
   * @type {Edm.Guid} 
   * @memberof User
   */
  ChangedByUUID

  /**
   * @description ChangedOn
   * @type {Edm.DateTimeOffset} 
   * @memberof User
   */
  ChangedOn

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof User
   */
  CreatedBy

  /**
   * @description Created By
   * @type {Edm.Guid} 
   * @memberof User
   */
  CreatedByUUID

  /**
   * @description CreatedOn
   * @type {Edm.DateTimeOffset} 
   * @memberof User
   */
  CreatedOn

  /**
   * @description DateFormatCode
   * @type {Edm.String} 
   * @memberof User
   */
  DateFormatCode

  /**
   * @description DateFormatCodeText
   * @type {Edm.String} 
   * @memberof User
   */
  DateFormatCodeText

  /**
   * @description DecimalFormatCode
   * @type {Edm.String} 
   * @memberof User
   */
  DecimalFormatCode

  /**
   * @description DecimalFormatCodeText
   * @type {Edm.String} 
   * @memberof User
   */
  DecimalFormatCodeText

  /**
   * @description E-Mail
   * @type {Edm.String} 
   * @memberof User
   */
  Email

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof User
   */
  EmployeeID

  /**
   * @description EmployeeUUID
   * @type {Edm.Guid} 
   * @memberof User
   */
  EmployeeUUID

  /**
   * @description InactiveIndicator
   * @type {Edm.Boolean} 
   * @memberof User
   */
  InactiveIndicator

  /**
   * @description LogonLanguageCode
   * @type {Edm.String} 
   * @memberof User
   */
  LogonLanguageCode

  /**
   * @description LogonLanguageCodeText
   * @type {Edm.String} 
   * @memberof User
   */
  LogonLanguageCodeText

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof User
   */
  ObjectID

  /**
   * @description PasswordInactiveIndicator
   * @type {Edm.Boolean} 
   * @memberof User
   */
  PasswordInactiveIndicator

  /**
   * @description PasswordLockedIndicator
   * @type {Edm.Boolean} 
   * @memberof User
   */
  PasswordLockedIndicator

  /**
   * @description PasswordPolicyCode
   * @type {Edm.String} 
   * @memberof User
   */
  PasswordPolicyCode

  /**
   * @description PasswordPolicyCodeText
   * @type {Edm.String} 
   * @memberof User
   */
  PasswordPolicyCodeText

  /**
   * @description StatusCode
   * @type {Edm.String} 
   * @memberof User
   */
  StatusCode

  /**
   * @description StatusCodeText
   * @type {Edm.String} 
   * @memberof User
   */
  StatusCodeText

  /**
   * @description TimeFormatCode
   * @type {Edm.String} 
   * @memberof User
   */
  TimeFormatCode

  /**
   * @description TimeFormatCodeText
   * @type {Edm.String} 
   * @memberof User
   */
  TimeFormatCodeText

  /**
   * @description TimeZoneCode
   * @type {Edm.String} 
   * @memberof User
   */
  TimeZoneCode

  /**
   * @description TimeZoneCodeText
   * @type {Edm.String} 
   * @memberof User
   */
  TimeZoneCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof User
   */
  UUID

  /**
   * @description UserAccountID
   * @type {Edm.String} 
   * @memberof User
   */
  UserAccountID

  /**
   * @description UserAccountTypeCode
   * @type {Edm.String} 
   * @memberof User
   */
  UserAccountTypeCode

  /**
   * @description UserAccountTypeCodeText
   * @type {Edm.String} 
   * @memberof User
   */
  UserAccountTypeCodeText

  /**
   * @description UserID
   * @type {Edm.String} 
   * @memberof User
   */
  UserID

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof User
   */
  UserName
}

export class UserSubscription extends C4CODataType {

  /**
   * @description CountedUser
   * @type {Edm.Boolean} 
   * @memberof UserSubscription
   */
  CountedUser

  /**
   * @description CountedUserAsOfDate
   * @type {Edm.DateTimeOffset} 
   * @memberof UserSubscription
   */
  CountedUserAsOfDate

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof UserSubscription
   */
  ETag

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof UserSubscription
   */
  ObjectID

  /**
   * @description UserID
   * @type {Edm.String} 
   * @memberof UserSubscription
   */
  UserID

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof UserSubscription
   */
  UserName

  /**
   * @type {UserTypeAssignment|UserTypeAssignment[]} 
   * @memberof UserSubscription
   */
  UserTypeAssignment
}

export class UserTypeAssignment extends C4CODataType {

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof UserTypeAssignment
   */
  ETag

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof UserTypeAssignment
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof UserTypeAssignment
   */
  ParentObjectID

  /**
   * @description SubscriptionType
   * @type {Edm.String} 
   * @memberof UserTypeAssignment
   */
  SubscriptionType

  /**
   * @description SubscriptionTypeText
   * @type {Edm.String} 
   * @memberof UserTypeAssignment
   */
  SubscriptionTypeText

  /**
   * @description UserType
   * @type {Edm.String} 
   * @memberof UserTypeAssignment
   */
  UserType

  /**
   * @description UserTypeText
   * @type {Edm.String} 
   * @memberof UserTypeAssignment
   */
  UserTypeText

  /**
   * @type {UserSubscription|UserSubscription[]} 
   * @memberof UserTypeAssignment
   */
  UserSubscription
}

export class Visit extends C4CODataType {

  /**
   * @description Account ID
   * @type {Edm.String} 
   * @memberof Visit
   */
  AccountPartyID

  /**
   * @description Account Name
   * @type {Edm.String} 
   * @memberof Visit
   */
  AccountPartyName

  /**
   * @description Account
   * @type {Edm.Guid} 
   * @memberof Visit
   */
  AccountUUID

  /**
   * @description Location Line 2
   * @type {Edm.String} 
   * @memberof Visit
   */
  AdditionalLocationName

  /**
   * @description All Day Event
   * @type {Edm.Boolean} 
   * @memberof Visit
   */
  AllDayEvent

  /**
   * @description Created On
   * @type {Edm.DateTimeOffset} 
   * @memberof Visit
   */
  CreationDateTime

  /**
   * @description Data Origin
   * @type {Edm.String} 
   * @memberof Visit
   */
  DataOriginTypeCode

  /**
   * @description DataOriginTypeCodeText
   * @type {Edm.String} 
   * @memberof Visit
   */
  DataOriginTypeCodeText

  /**
   * @description Distribution Channel
   * @type {Edm.String} 
   * @memberof Visit
   */
  DistributionChannel

  /**
   * @description DistributionChannelText
   * @type {Edm.String} 
   * @memberof Visit
   */
  DistributionChannelText

  /**
   * @description Division
   * @type {Edm.String} 
   * @memberof Visit
   */
  Division

  /**
   * @description DivisionText
   * @type {Edm.String} 
   * @memberof Visit
   */
  DivisionText

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof Visit
   */
  ETag

  /**
   * @description End Date/Time
   * @type {c4codata.LOCALNORMALISED_DateTime} 
   * @memberof Visit
   */
  EndDateTime

  /**
   * @description Category
   * @type {Edm.String} 
   * @memberof Visit
   */
  GroupCode

  /**
   * @description GroupCodeText
   * @type {Edm.String} 
   * @memberof Visit
   */
  GroupCodeText

  /**
   * @description Groupware Item Id
   * @type {Edm.String} 
   * @memberof Visit
   */
  GroupwareItemID

  /**
   * @description Visit ID
   * @type {Edm.String} 
   * @memberof Visit
   */
  ID

  /**
   * @description Changed On
   * @type {Edm.DateTimeOffset} 
   * @memberof Visit
   */
  LastChangeDateTime

  /**
   * @description Location Name
   * @type {Edm.String} 
   * @memberof Visit
   */
  Location

  /**
   * @description Marked For Deletion
   * @type {Edm.Boolean} 
   * @memberof Visit
   */
  MarkedForDeletion

  /**
   * @description Marked For Deletion Date
   * @type {Edm.DateTime} 
   * @memberof Visit
   */
  MarkedForDeletionDate

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof Visit
   */
  ObjectID

  /**
   * @description Organizer Email
   * @type {Edm.String} 
   * @memberof Visit
   */
  OrganizerEmailURI

  /**
   * @description Organizer Party ID
   * @type {Edm.String} 
   * @memberof Visit
   */
  OrganizerPartyID

  /**
   * @description Organizer Party Name
   * @type {Edm.String} 
   * @memberof Visit
   */
  OrganizerPartyName

  /**
   * @description Organizer
   * @type {Edm.Guid} 
   * @memberof Visit
   */
  OrganizerUUID

  /**
   * @description Owner Email
   * @type {Edm.String} 
   * @memberof Visit
   */
  OwnerEmailURI

  /**
   * @description Owner Party ID
   * @type {Edm.String} 
   * @memberof Visit
   */
  OwnerPartyID

  /**
   * @description Owner Party Name
   * @type {Edm.String} 
   * @memberof Visit
   */
  OwnerPartyName

  /**
   * @description Owner
   * @type {Edm.Guid} 
   * @memberof Visit
   */
  OwnerUUID

  /**
   * @description Primary Contact ID
   * @type {Edm.String} 
   * @memberof Visit
   */
  PrimaryContactPartyID

  /**
   * @description Primary Contact Name
   * @type {Edm.String} 
   * @memberof Visit
   */
  PrimaryContactPartyName

  /**
   * @description PrimaryContact
   * @type {Edm.Guid} 
   * @memberof Visit
   */
  PrimaryContactUUID

  /**
   * @description Reported Date/Time
   * @type {Edm.DateTimeOffset} 
   * @memberof Visit
   */
  ReportedDateTime

  /**
   * @description Route
   * @type {Edm.Guid} 
   * @memberof Visit
   */
  Route

  /**
   * @description Sales Organization
   * @type {Edm.String} 
   * @memberof Visit
   */
  SalesOrganisation

  /**
   * @description Territory ID
   * @type {Edm.String} 
   * @memberof Visit
   */
  SalesTerritory

  /**
   * @description Start Date/Time
   * @type {c4codata.LOCALNORMALISED_DateTime} 
   * @memberof Visit
   */
  StartDateTime

  /**
   * @description Status
   * @type {Edm.String} 
   * @memberof Visit
   */
  Status

  /**
   * @description StatusText
   * @type {Edm.String} 
   * @memberof Visit
   */
  StatusText

  /**
   * @description Subject
   * @type {Edm.String} 
   * @memberof Visit
   */
  Subject

  /**
   * @description Tour
   * @type {Edm.Guid} 
   * @memberof Visit
   */
  Tour

  /**
   * @description Activity Type
   * @type {Edm.String} 
   * @memberof Visit
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof Visit
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof Visit
   */
  UUID

  /**
   * @type {VisitAttachment|VisitAttachment[]} 
   * @memberof Visit
   */
  VisitAttachment

  /**
   * @type {VisitNotes|VisitNotes[]} 
   * @memberof Visit
   */
  VisitNotes

  /**
   * @type {VisitParty|VisitParty[]} 
   * @memberof Visit
   */
  VisitParty

  /**
   * @type {VisitReference|VisitReference[]} 
   * @memberof Visit
   */
  VisitReference
}

export class VisitAttachment extends C4CODataType {

  /**
   * @description Binary
   * @type {Edm.Binary} 
   * @memberof VisitAttachment
   */
  Binary

  /**
   * @description Category Code
   * @type {Edm.String} 
   * @memberof VisitAttachment
   */
  CategoryCode

  /**
   * @description CategoryCodeText
   * @type {Edm.String} 
   * @memberof VisitAttachment
   */
  CategoryCodeText

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof VisitAttachment
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof VisitAttachment
   */
  CreatedOn

  /**
   * @description Document Link
   * @type {Edm.String} 
   * @memberof VisitAttachment
   */
  DocumentLink

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof VisitAttachment
   */
  ETag

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof VisitAttachment
   */
  LastUpdatedBy

  /**
   * @description Last Updated On
   * @type {Edm.DateTime} 
   * @memberof VisitAttachment
   */
  LastUpdatedOn

  /**
   * @description Link Web URI
   * @type {Edm.String} 
   * @memberof VisitAttachment
   */
  LinkWebURI

  /**
   * @description Mime Type
   * @type {Edm.String} 
   * @memberof VisitAttachment
   */
  MimeType

  /**
   * @description Name
   * @type {Edm.String} 
   * @memberof VisitAttachment
   */
  Name

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof VisitAttachment
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof VisitAttachment
   */
  ParentObjectID

  /**
   * @description Size In KiloBytes
   * @type {Edm.Decimal} 
   * @memberof VisitAttachment
   */
  SizeInkB

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof VisitAttachment
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof VisitAttachment
   */
  TypeCodeText

  /**
   * @description UUID
   * @type {Edm.Guid} 
   * @memberof VisitAttachment
   */
  UUID
}

export class VisitNotes extends C4CODataType {

  /**
   * @description Author Name
   * @type {Edm.String} 
   * @memberof VisitNotes
   */
  AuthorName

  /**
   * @description Author UUID
   * @type {Edm.Guid} 
   * @memberof VisitNotes
   */
  AuthorUUID

  /**
   * @description Created By
   * @type {Edm.String} 
   * @memberof VisitNotes
   */
  CreatedBy

  /**
   * @description Created On
   * @type {Edm.DateTime} 
   * @memberof VisitNotes
   */
  CreatedOn

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof VisitNotes
   */
  ETag

  /**
   * @description Language Code
   * @type {Edm.String} 
   * @memberof VisitNotes
   */
  LanguageCode

  /**
   * @description LanguageCodeText
   * @type {Edm.String} 
   * @memberof VisitNotes
   */
  LanguageCodeText

  /**
   * @description Last Updated By
   * @type {Edm.String} 
   * @memberof VisitNotes
   */
  LastUpdatedBy

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof VisitNotes
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof VisitNotes
   */
  ParentObjectID

  /**
   * @description Text
   * @type {Edm.String} 
   * @memberof VisitNotes
   */
  Text

  /**
   * @description Type Code
   * @type {Edm.String} 
   * @memberof VisitNotes
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof VisitNotes
   */
  TypeCodeText

  /**
   * @description Updated On
   * @type {Edm.DateTime} 
   * @memberof VisitNotes
   */
  UpdatedOn
}

export class VisitParty extends C4CODataType {

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof VisitParty
   */
  ETag

  /**
   * @description Party Email
   * @type {Edm.String} 
   * @memberof VisitParty
   */
  Email

  /**
   * @description FormattedPhoneNumber
   * @type {Edm.String} 
   * @memberof VisitParty
   */
  FormattedPhoneNumber

  /**
   * @description MainIndicator
   * @type {Edm.Boolean} 
   * @memberof VisitParty
   */
  MainIndicator

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof VisitParty
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof VisitParty
   */
  ParentObjectID

  /**
   * @description PartyID
   * @type {Edm.String} 
   * @memberof VisitParty
   */
  PartyID

  /**
   * @description Party Name
   * @type {Edm.String} 
   * @memberof VisitParty
   */
  PartyName

  /**
   * @description PartyRoleCode
   * @type {Edm.String} 
   * @memberof VisitParty
   */
  PartyRoleCode

  /**
   * @description PartyRoleCodeText
   * @type {Edm.String} 
   * @memberof VisitParty
   */
  PartyRoleCodeText

  /**
   * @description PartyUUID
   * @type {Edm.Guid} 
   * @memberof VisitParty
   */
  PartyUUID

  /**
   * @description VisitGroupCode
   * @type {Edm.String} 
   * @memberof VisitParty
   */
  VisitGroupCode

  /**
   * @description VisitGroupCodeText
   * @type {Edm.String} 
   * @memberof VisitParty
   */
  VisitGroupCodeText

  /**
   * @type {Visit|Visit[]} 
   * @memberof VisitParty
   */
  Visit
}

export class VisitReference extends C4CODataType {

  /**
   * @description ETag
   * @type {Edm.DateTimeOffset} 
   * @memberof VisitReference
   */
  ETag

  /**
   * @description ID
   * @type {Edm.String} 
   * @memberof VisitReference
   */
  ID

  /**
   * @description ItemUUID
   * @type {Edm.Guid} 
   * @memberof VisitReference
   */
  ItemUUID

  /**
   * @description ObjectID
   * @type {Edm.String} 
   * @memberof VisitReference
   */
  ObjectID

  /**
   * @description ParentObjectID
   * @type {Edm.String} 
   * @memberof VisitReference
   */
  ParentObjectID

  /**
   * @description ReferenceRoleCode
   * @type {Edm.String} 
   * @memberof VisitReference
   */
  ReferenceRoleCode

  /**
   * @description ReferenceRoleCodeText
   * @type {Edm.String} 
   * @memberof VisitReference
   */
  ReferenceRoleCodeText

  /**
   * @description TypeCode
   * @type {Edm.String} 
   * @memberof VisitReference
   */
  TypeCode

  /**
   * @description TypeCodeText
   * @type {Edm.String} 
   * @memberof VisitReference
   */
  TypeCodeText

  /**
   * @description VisitGroupCode
   * @type {Edm.String} 
   * @memberof VisitReference
   */
  VisitGroupCode

  /**
   * @description VisitGroupCodeText
   * @type {Edm.String} 
   * @memberof VisitReference
   */
  VisitGroupCodeText

  /**
   * @type {Visit|Visit[]} 
   * @memberof VisitReference
   */
  Visit
}


/**
 * @returns {Account[]}
 */
export function AccountFindByCommunicationData() { };

/**
 * @returns {Account[]}
 */
export function AccountFindByElements() { };

/**
 * @returns {Contact[]}
 */
export function ContactFindByElements() { };

/**
 * @returns {Employee[]}
 */
export function EmployeeByEmail() { };

/**
 * @returns {Employee[]}
 */
export function EmployeeFindByCommunicationData() { };

/**
 * @returns {Employee[]}
 */
export function EmployeeFindByElements() { };

/**
 * @returns {Employee[]}
 */
export function EmployeeFindByName() { };

/**
 * @returns {User[]}
 */
export function GetLoggedInUserInfo() { };

/**
 * @returns {IndividualCustomer[]}
 */
export function IndividualCustomerFindByElements() { };

/**
 * @returns {Lead[]}
 */
export function LeadFindByElements() { };

/**
 * @returns {Opportunity[]}
 */
export function OpportunityFindByOwner() { };

/**
 * @returns {Product[]}
 */
export function ProductFindByCategory() { };

/**
 * @returns {ProductSales[]}
 */
export function ProductFindBySalesInfo() { };

export default {
  Account,
  AccountAddress,
  AccountAttachment,
  AccountContactCommunicationData,
  AccountContactRelationship,
  AccountContacts,
  AccountNotes,
  AccountRole,
  AccountSalesData,
  AccountSalesGroupName,
  AccountSalesOfficeName,
  AccountSalesOrganisationName,
  AccountTeam,
  AccountTeamAddress,
  Appointment,
  AppointmentAttachment,
  AppointmentInvolvedParties,
  AppointmentNotes,
  BusinessPartner,
  CodeList,
  Contact,
  ContactAttachment,
  ContactBusinessAddress,
  ContactBusinessPostalAddress,
  ContactCommunicationData,
  ContactNotes,
  ContactPersonalAddress,
  ContactPersonalPostalAddress,
  ContextualCodeList,
  EMail,
  EMailAttachment,
  EMailCcRecipients,
  EMailNotes,
  EMailToRecipients,
  EmailBusinessTransactionDocumentReference,
  Employee,
  EmployeeBusinessAddress,
  EmployeeCommunicationData,
  EmployeeFormattedBusinessAddress,
  EmployeeValueHelp,
  ExternalIDMapping,
  IndividualCustomer,
  IndividualCustomerAttachment,
  IndividualCustomerCommon,
  IndividualCustomerNotes,
  Lead,
  LeadAttachment,
  LeadBusinessDocumentReference,
  LeadInvolvedParties,
  LeadProduct,
  LeadSalesAndMarketingTeam,
  LeanLead,
  LeanLeadAttachmentFolder,
  LeanLeadBusinessTransactionDocumentReference,
  LeanLeadContact,
  LeanLeadExternalParty,
  LeanLeadItem,
  LeanLeadSalesAndMarketingTeam,
  Opportunity,
  OpportunityAppointmentSalesActivity,
  OpportunityAttachment,
  OpportunityBusinessDocumentReference,
  OpportunityContact,
  OpportunityEMailSalesActivity,
  OpportunityInvolvedParties,
  OpportunityNotes,
  OpportunityPhoneCallSalesActivity,
  OpportunityProduct,
  OpportunityProductNotes,
  OpportunitySalesTeam,
  OpportunityTaskSalesActivity,
  PhoneCall,
  PhoneCallAttachment,
  PhoneCallNotes,
  PhoneCallParticipants,
  Product,
  ProductAttachment,
  ProductCategoryAssignment,
  ProductCategoryHierarchy,
  ProductCategoryHierarchyDescription,
  ProductChangedBy,
  ProductSales,
  ProductSalesOrganisation,
  ServiceAssignment,
  ServiceAssignmentBusinessTransactionDocReference,
  ServiceIssueCategoryCatalogue,
  ServiceIssueCategoryCatalogueCategory,
  ServiceIssueCategoryCatalogueParentCategory,
  ServicePointLocationAddress,
  ServiceRequest,
  ServiceRequestAttachmentFolder,
  ServiceRequestBusinessTransactionDocumentReference,
  ServiceRequestDescription,
  ServiceRequestHistoricalVersion,
  ServiceRequestInteraction,
  ServiceRequestItem,
  ServiceRequestItemScheduleLine,
  Task,
  TaskAttachment,
  TaskInvolvedParties,
  TaskNotes,
  TimeEntry,
  TimeEntryItem,
  TimeReport,
  User,
  UserSubscription,
  UserTypeAssignment,
  Visit,
  VisitAttachment,
  VisitNotes,
  VisitParty,
  VisitReference,
};

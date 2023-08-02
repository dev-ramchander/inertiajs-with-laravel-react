export const APP_NAME = "App name";
export const REDIRECT_UNAUTH_ROUTE = '/login';
export const REDIRECT_AUTH_ROUTE = '/profile';
export const REDIRECT_DEFAULT_ROUTE = '/dashboard';

export const AXIOS_ERROR_CODE = {
    ERR_NETWORK: 'ERR_NETWORK',
    ECONNABORTED: 'ECONNABORTED',
    ERR_BAD_REQUEST: 'ERR_BAD_REQUEST',
    ERR_CANCELED: 'ERR_CANCELED',
}
export const IMAGES = {
    LOGO: "/assets/images/logo.svg",
}

export const RESPONSE_CODE = {
    200: 200,
    400: 400,
    404: 404,
    500: 500,
}

export const STORAGE_INDEXES = {
    IS_AUTHENTICATED:'isAuthenticated',
    ACCESS_TOKEN:'access_token',
    LOADER:'loader',
    EMAIL:'email',
    NAME:'name',
    AUTH:'auth',
    ERROR_MESSAGE:'errorMessage',
    USER_ID:'id',
    USER_ROLE:'role_name',
    PASSWORD:'password',
    APP_STORAGE:'app_storage',
    APP_SETTINGS_STORAGE:'app_storage',
    NAV_SETTINGS:'tg_nav_settings',
    USER_DETAILS:'userDetails',
    LOCALE:'locale',
    PROFILE_PICTURE:'profile_picture',
    PAGE_NO:'page_no',
    NUMBER_OF_ROWS:'number_of_rows',
    APP_SETTINGS:'app_settings',
    ROLE_LIST:'role_list',
    ROLE_ID:'role_id',
    SEARCH_TEXT:'search_text',
}

export const USER_ROLES={
    ADMIN:'Admin',
    SUB_ADMIN:'Sub Admin',
    TRAVELLER:'traveller',
    GUIDE:'guide',
}

export const DEFAULT_VALUE={
    LOCALE:'en',
    LOGO:'/assets/images/app/logo_header.png',
    NA:'NA',
    COUNTRY_ISO:'us',
    COUNTRY_DIAL_CODE:'+1',
    FLAG_CDN_W20:'https://flagcdn.com/w20/',
    FLAG_CDN_W40:'https://flagcdn.com/w40/',
}
export const USER_BEHAVIOUR_TYPE={
    STATUS:{
        0:{className:'warning',value:'inactive'},
        1:{className:'success',value:'active'},
        2:{className:'error',value:'suspended'},
        3:{className:'error',value:'removed'},
    },
    VERIFIED:{
        0:'not verified',
        1:'verified'
    },
    AVAILABILITY:{
        0:{className:'default', value:'not-available'},
        1:{className:'success', value:'available'},
    }
}

export const BLOG_BEHAVIOUR_TYPE={
    STATUS:{
        0:{className:'error',value:'un-published'},
        1:{className:'success',value:'published'},
    },
    FILTER:[
        {value:0, name:'un-published'},
        {value:1, name:'published'},
    ]
}

export const FRONTEND_WEB_FORMS={
    1:"contact form",
    2:"enquiry form",
    NA:"na",
}

export const USER_BEHAVIOUR_LIST={
    STATUS:'status',
    AVAILABILITY:'availability',
    VERIFIED:'verified',
}

export const DEFAULT_CSS={
    BG:'#e2f6fc',
    LOADER_BG_COLOR_OG:'#e2f6fc',
    LOADER_BG_COLOR:'#fff',
    DARK_BG:'#354054',
    PRIMARY_COLOR:'#1f74ca',
    SUCCESS_MSG_COLOR:'#4caf50',
    ERROR_MSG_COLOR:'#FF4842',
    WARNING_COLOR:'#ffab00',
    SUCCESS_COLOR:'#36b37e'
}

export const ROUTE_SLUGS={
    ROOT:'/',
    LOGIN:'/login',
    LOGOUT:'/logout',
    FORGOT_PASS:'forgot-password',
    RESET_PASS:'reset-password',
    PROFILE:'/profile',
    ABOUT_US:'/about-us',
    CONTACT_US:'contact-us',
}

export const AUTH_ROUTE_SLUGS={
    ROOT:'/',
    APP:'app',
    DASHBOARD:'dashboard',
    PROFILE:'/profile',
    PRODUCTS:'/products',
    ENQUERIES:'enqueries',
    USERS:{
        ROOT:'users',
        CREATE_NEW:'users/create',
        PROFILE:'users/profile',
    },
    PAYMENTS:{
        ROOT:'payments',
        DETAILS:'payments/details',
    },
    BLOGS:{
        ROOT:'blogs',
        CREATE_NEW:'blogs/create',
        EDIT:'blogs/edit',
    }
}

export const DEFAULT_APP_TITLE ={
    PROFILE:'Profile',
    USERS:'Users',
    CREATE_USER:'Create new user',
    USER_PROFILE:'User profile',
    ENQUERIES:'Enquires',
    PAYMENTS:'Payments',
    BLOGS:'Blogs',
    CREATE_BLOG:'Create new blog',
    EDIT_BLOG:'Edit blog',
}

export const USER_STATUS={
    DEFAULT:0,
    ACTIVE:1,
    SUSPENDED:2,
    REMOVED:3,
    DELETED:3,
}
export enum CollarCounty {
  Lake = 'Lake',
  McHenry = 'McHenry',
  Kane = 'Kane',
  DuPage = 'DuPage',
  Cook = 'Cook',
  Will = 'Will',
}

export const CountyColors: Record<CollarCounty, string> = {
  [CollarCounty.Lake]: '#6e0d0e',
  [CollarCounty.McHenry]: '#fba91a',
  [CollarCounty.Kane]: '#4a9852',
  [CollarCounty.DuPage]: '#d2a62c',
  [CollarCounty.Cook]: '#2d5058',
  [CollarCounty.Will]: '#bc2126',
};

export interface Court {
  county: CollarCounty;
  color: string;
  name: string;
  address: string;
  phone: string;
  link: string;
}

export interface Job {
  id: string;
  date: Date;
  time: Date;
  lawyer: LawyerProfile;
  court: Court;
  county: CollarCounty;
  job_description: string;
  amount: string;
}

export interface LawyerProfile {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  profile_link?: string;
  profile_picture?: string;
  bio?: string;
}

export const CountyCourts: Court[] = [
  {
    county: CollarCounty.Cook,
    color: '#d5dcdd',
    name: 'Domestic Violence Court',
    address: '555 W Harrison St, Chicago, IL 60607',
    phone: '(312) 603-6444',
    link: 'https://www.cookcountycourt.org/ABOUT-THE-COURT/Divisions/Criminal-Division/Domestic-Violence-Court',
  },
  {
    county: CollarCounty.Cook,
    color: '#c0cacc',
    name: 'Fifth Municipal District - Bridgeview',
    address: '10220 S 76th Ave, Bridgeview, IL 60455',
    phone: '(708) 974-6500',
    link: 'https://www.cookcountycourt.org/ABOUT-THE-COURT/Divisions/Municipal-Districts/Fifth-Municipal-District',
  },
  {
    county: CollarCounty.Cook,
    color: '#abb9bc',
    name: 'Fourth Municipal District - Maywood',
    address: '1500 Maybrook Dr, Maywood, IL 60153',
    phone: '(708) 865-6000',
    link: 'https://www.cookcountycourt.org/ABOUT-THE-COURT/Divisions/Municipal-Districts/Fourth-Municipal-District',
  },
  {
    county: CollarCounty.Cook,
    color: '#81969a',
    name: 'Domestic Violence Court',
    address: '555 W Harrison St, Chicago, IL 60607',
    phone: '(312) 603-6444',
    link: 'https://www.cookcountycourt.org/ABOUT-THE-COURT/Divisions/Criminal-Division/Domestic-Violence-Court',
  },
  {
    county: CollarCounty.Cook,
    color: '#6C848A',
    name: 'George N. Leighton Criminal Court Building',
    address: '2650 S California Ave, Chicago, IL 60608',
    phone: '(312) 603-6444',
    link: 'https://www.cookcountycourt.org/ABOUT-THE-COURT/Divisions/Criminal-Division/George-N-Leighton-Criminal-Court-Building',
  },
  {
    county: CollarCounty.Cook,
    color: '#567279',
    name: 'Juvenile Center',
    address: '1100 S Hamilton Ave, Chicago, IL 60612',
    phone: '(312) 433-3000',
    link: 'https://www.cookcountycourt.org/ABOUT-THE-COURT/Divisions/Juvenile-Justice-Division/Juvenile-Center',
  },
  {
    county: CollarCounty.Cook,
    color: '#426168',
    name: 'Richard J. Daley Center',
    address: '50 W Washington St, Chicago, IL 60602',
    phone: '(312) 603-5030',
    link: 'https://www.cookcountycourt.org/ABOUT-THE-COURT/Divisions/Civil-Division/Richard-J-Daley-Center',
  },
  {
    county: CollarCounty.Cook,
    color: '#96A7AB',
    name: 'Second Municipal District - Skokie',
    address: '5600 Old Orchard Rd, Skokie, IL 60077',
    phone: '(847) 470-7000',
    link: 'https://www.cookcountycourt.org/ABOUT-THE-COURT/Divisions/Municipal-Districts/Second-Municipal-District',
  },
  {
    county: CollarCounty.Cook,
    color: '#96A7AB',
    name: 'Sixth Municipal District - Markham',
    address: '16501 S Kedzie Ave, Markham, IL 60428',
    phone: '(708) 232-4000',
    link: 'https://www.cookcountycourt.org/ABOUT-THE-COURT/Divisions/Municipal-Districts/Sixth-Municipal-District',
  },
  {
    county: CollarCounty.Cook,
    color: '#96A7AB',
    name: 'Third Municipal District - Rolling Meadows',
    address: '2121 Euclid Ave, Rolling Meadows, IL 60008',
    phone: '(847) 818-3000',
    link: 'https://www.cookcountycourt.org/ABOUT-THE-COURT/Divisions/Municipal-Districts/Third-Municipal-District',
  },
  {
    county: CollarCounty.Lake,
    color: '#96A7AB',
    name: 'Lake County Courthouse',
    address: '18 N County St, Waukegan, IL 60085',
    phone: '(847) 377-3600',
    link: 'https://www.lakecountyil.gov/Departments/Court/',
  },
  {
    county: CollarCounty.Kane,
    color: '',
    name: 'Kane County Judicial Center',
    address: '37W777 IL-38, St. Charles, IL 60175',
    phone: '(630) 232-3413',
    link: 'https://www.kanecountyillinois.com/Pages/Courts.aspx',
  },
  {
    county: CollarCounty.Kane,
    color: '',
    name: 'Kane County Courthouse',
    address: '100 S 3rd St, Geneva, IL 60134',
    phone: '(630) 232-3413',
    link: 'https://www.kanecountyillinois.com/Pages/Courts.aspx',
  },
  {
    county: CollarCounty.McHenry,
    color: '#96A7AB',
    name: 'McHenry County Courthouse',
    address: '2200 N Seminary Ave, Woodstock, IL 60098',
    phone: '(815) 334-4242',
    link: 'https://www.mchenrycountyil.gov/county-government/departments-jurisdictions/circuit-court',
  },
  {
    county: CollarCounty.DuPage,
    color: '#96A7AB',
    name: 'DuPage County Courthouse',
    address: '505 N County Farm Rd, Wheaton, IL 60187',
    phone: '(630) 407-8900',
    link: 'https://www.dupageco.org/CircuitCourt/',
  },
  {
    county: CollarCounty.Will,
    color: '#96A7AB',
    name: 'Will County Courthouse',
    address: '14 W Jefferson St, Joliet, IL 60432',
    phone: '(815) 727-8592',
    link: 'https://www.willcountycircuitcourt.com/',
  },
];

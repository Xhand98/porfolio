declare module "*.json" {
  const value: {
    projects: Array<{
      title: string;
      body: string;
      href: string;
      svg: string;
    }>;
    Donations: Array<{
      title: string;
      body: string;
      href: string;
      svg: string;
    }>;
  };
  export default value;
}

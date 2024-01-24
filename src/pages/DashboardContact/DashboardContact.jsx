import React, { useState } from "react";

import Buttonseemore from "../../components/button/Buttonseemore";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import { NavbarSimple } from "../../components/navbar/Navbar";
import { Card } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";

const TABLE_HEAD = ["profile","Name", "Email", "contact", "Date", "update", "Delete"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

const DashboardContact = () => {
  let buttonText = {
    createcontact: "Create contact",
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  const [del, setDel] = React.useState(false);
  const handleDel = () => setDel(!del);

  const [update ,setUpdate] = useState(false)
  const handleupdate = () => setUpdate(!update)

  return (
    <>
      <NavbarSimple />
      <div className="lg:w-[80%] mx-auto">
        <div className=" flex justify-between items-center mt-6 p-4">
          <div>
            <h1 className="lg:text-[1.6rem] sm:text-base font-bold">
              Your Contacts
            </h1>
          </div>

          <div>
            <Buttonseemore onClick={handleOpen} buttonText={buttonText} />
          </div>
          <Dialog open={open} size="xs" handler={handleOpen}>
            <div className="flex items-center justify-between">
              <DialogHeader className="flex flex-col items-start">
                <Typography className=" text-base font-[10px]" variant="h4">
                  Create Contact
                </Typography>
              </DialogHeader>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
                onClick={handleOpen}
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <DialogBody>
              <Typography
                className="mb-5 -mt-7 text-[0.9rem] "
                color="gray"
                variant="lead">
                Add new contact in your contact list
              </Typography>

              <div className="grid gap-3">
                <Input color="purple" label="Name" />
                <Input color="purple" label="Email" />
                <Input color="purple" label="contact" />
                <Button
                  variant="gradient"
                  size="sm"
                  color="purple"
                  className="flex items-start"
                >
                  <input type="file" className="ms-0 mr-auto" />
                </Button>
              </div>
            </DialogBody>
            <DialogFooter className="space-x-2">
              <Button variant="text" color="gray" onClick={handleOpen}>
                cancel
              </Button>
              <Button variant="gradient" color="purple" onClick={handleOpen}>
                Create contact
              </Button>
            </DialogFooter>
          </Dialog>
        </div>

        {/* Search Bar */}

        <div className="mt-10 max-w-sm p-[0.2rem] px-5 rounded-full border flex focus-within:border-gray-300">
          <input
            type="text"
            placeholder="Search anything"
            className="bg-transparent w-full focus:outline-none pr-4 font-lg border-0 focus:ring-0 px-0 py-0"
          ></input>

          <button className="flex flex-row items-center justify-center min-w-[100px] px-4 rounded-full font-sm tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 ease-in-out duration-150 text-base bg-purple-500 text-white  border-transparent py-1.5 h-[38px] -mr-3 transform hover:scale-95 transition-transform">
            Search
          </button>
          <div></div>
        </div>
        <div>
          {/* table */}

          <Card className="h-full w-full pt-3 mt-5 overflow-y-scroll overflow-x-scroll">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({ name, job, date }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <Avatar
                          src="https://docs.material-tailwind.com/img/face-2.jpg"
                          alt="avatar"
                          color="purple"
                          withBorder={true}
                          className="p-0.5"
                        />
                      </td>

                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal">
                          {name}
                        </Typography>
                      </td>

                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {job}
                        </Typography>
                      </td>

                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {job}
                        </Typography>
                      </td>

                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="purple"
                          className="font-medium"
                          onClick={handleupdate}
                        >
                          Edit
                        </Typography>
                      </td>

                      <td className={classes}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="red"
                          className="font-medium"
                          onClick={() => handleDel()}
                        >
                          Delete
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
          <Dialog open={update} size="xs" handler={handleupdate}>
            <div className="flex items-center justify-between">
              <DialogHeader className="flex flex-col items-start">
                <Typography className=" text-2xl font-[10px]" variant="h2">
                  Update Contact
                </Typography>
              </DialogHeader>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
                onClick={handleupdate}
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <DialogBody>
              <Typography
                className="mb-5 -mt-7 text-[0.9rem] "
                color="gray"
                variant="lead">
                update contact in your contact list
              </Typography>

              <div className="grid gap-3">
                <Input color="purple" label="Name" />
                <Input color="purple" label="Email" />
                <Input color="purple" label="contact" />
                <Button
                  variant="gradient"
                  size="sm"
                  color="purple"
                  className="flex items-start"
                >
                  <input type="file" className="ms-0 mr-auto" />
                </Button>
              </div>
            </DialogBody>
            <DialogFooter className="space-x-2">
              <Button variant="text" color="gray" onClick={handleupdate}>
                cancel
              </Button>
              <Button variant="gradient" color="purple" onClick={handleupdate}>
                Create contact
              </Button>
            </DialogFooter>
          </Dialog>



          {/* Delete pop */}
          <Dialog size={"xs"} open={del} handler={handleDel}>
            <div className="w-14 text-center my-2 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-14 h-14"
                color="#FF2E2E"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </div>
            <DialogBody>Are you sure you want to delete this item</DialogBody>
            <div className="flex justify-center">
              <DialogFooter>
                <Button
                  variant="text"
                  color="purple"
                  onClick={handleDel}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="red" onClick={handleDel}>
                  Delete
                </Button>
              </DialogFooter>
            </div>
          </Dialog>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default DashboardContact;

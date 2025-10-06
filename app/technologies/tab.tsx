import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Image from "next/image";
import JavaScript from "../../public/assests/images/JavaScript.png";
import android from "../../public/assests/images/android.png";
import angular from "../../public/assests/images/angular.png";
import apple from "../../public/assests/images/apple.jpg";
import CPlus from "../../public/assests/images/CPlus.png";
import css from "../../public/assests/images/css.png";
import django from "../../public/assests/images/django.png";
import CLanguage from "../../public/assests/images/CLanguage.png";
import openCv from "../../public/assests/images/openCv.png";
import eImage from "../../public/assests/images/eImage.png";
import express from "../../public/assests/images/express.png";
import flutter from "../../public/assests/images/flutter.png";
import go from "../../public/assests/images/go.png";
import hadoop from "../../public/assests/images/hadoop.png";
import html from "../../public/assests/images/html.png";
import ionic from "../../public/assests/images/ionic.png";
import java from "../../public/assests/images/java.png";
import kotlin from "../../public/assests/images/kotlin.png";
import laravel from "../../public/assests/images/laravel.png";
import mariaDb from "../../public/assests/images/mariaDb.png";
import mongodb from "../../public/assests/images/mongodb.png";
import mySql from "../../public/assests/images/my-sql.png";
import native from "../../public/assests/images/native.png";
import oracle from "../../public/assests/images/oracle.png";
import php from "../../public/assests/images/php.png";
import postgres from "../../public/assests/images/postgres.png";
import powerBI from "../../public/assests/images/powerBI.png";
import python from "../../public/assests/images/python.png";
import reactJs from "../../public/assests/images/reactJs.png";
import redis from "../../public/assests/images/redis.png";
import rStudio from "../../public/assests/images/rStudio.png";
import spring from "../../public/assests/images/spring.png";
import sql from "../../public/assests/images/sql.png";
import symfony from "../../public/assests/images/symfony.png";
import vueJs from "../../public/assests/images/vueJs.png";
import nodeJs from "../../public/assests/images/nodeJs.png";

const images = [
  { id: 1, src: JavaScript, category: "frontend" },
  { id: 28, src: reactJs, category: "fullstack" },
  { id: 34, src: vueJs, category: "fullstack" },
  { id: 9, src: eImage, category: "fullstack" },
  { id: 14, src: html, category: "fullstack" },
  { id: 7, src: css, category: "fullstack" },
  { id: 35, src: nodeJs, category: "fullstack" },
  { id: 16, src: java, category: "fullstack" },
  { id: 27, src: python, category: "fullstack" },
  { id: 24, src: php, category: "fullstack" },
  { id: 5, src: CLanguage, category: "fullstack" },
  { id: 6, src: CPlus, category: "fullstack" },
  { id: 18, src: laravel, category: "fullstack" },
  { id: 33, src: symfony, category: "fullstack" },
  { id: 8, src: django, category: "fullstack" },
  { id: 10, src: express, category: "fullstack" },
  { id: 31, src: spring, category: "fullstack" },
  { id: 4, src: apple, category: "backend" },
  { id: 22, src: native, category: "fullstack" },
  { id: 11, src: flutter, category: "fullstack" },
  { id: 17, src: kotlin, category: "fullstack" },
  { id: 15, src: ionic, category: "fullstack" },
  { id: 21, src: mySql, category: "fullstack" },
  { id: 32, src: sql, category: "fullstack" },
  { id: 25, src: postgres, category: "fullstack" },
  { id: 19, src: mariaDb, category: "fullstack" },
  { id: 20, src: mongodb, category: "fullstack" },
  { id: 29, src: redis, category: "fullstack" },
  { id: 23, src: oracle, category: "fullstack" },
  { id: 12, src: go, category: "fullstack" },
  { id: 3, src: angular, category: "backend" },
  { id: 2, src: android, category: "frontend" },
  { id: 30, src: rStudio, category: "fullstack" },
  { id: 13, src: hadoop, category: "fullstack" },
  { id: 26, src: powerBI, category: "fullstack" },
  { id: 36, src: openCv, category: "fullstack" },
];

const allImages = images;
const frontendImages = images.filter((img) => img.category === "frontend");
const backendImages = images.filter((img) => img.category === "backend");
const fullstackImages = images.filter((img) => img.category === "fullstack");
const mobileImages = images.filter((img) => img.category === "mobile");
const databaseImages = images.filter((img) => img.category === "database");
const googleImages = images.filter((img) => img.category === "google");
const dataScienceImages = images.filter(
  (img) => img.category === "dataScience"
);
const machineLearningImages = images.filter(
  (img) => img.category === "machineLearning"
);
const devOpsImages = images.filter((img) => img.category === "devOps");
const cmsImages = images.filter((img) => img.category === "cms");
const eComImages = images.filter((img) => img.category === "eCom");
const securityImages = images.filter((img) => img.category === "security");

const ImageGrid = ({ list }: { list: typeof images }) => (
  <div className="grid grid-cols-6 gap-6 my-16">
    {list.map((image) => (
      <div
        key={image.id}
        className="bg-white shadow-md rounded-lg w-52 h-48 flex items-center justify-center"
      >
        <Image
          key={image.id}
          src={image.src}
          alt={`tech-${image.id}`}
          width={80}
          height={80}
          className="rounded-md object-contain w-28 h-28"
        />
      </div>
    ))}
  </div>
);

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "All",
    children: <ImageGrid list={allImages} />,
  },
  {
    key: "2",
    label: "Frontend",
    children: <ImageGrid list={frontendImages} />,
  },
  {
    key: "3",
    label: "Backend",
    children: <ImageGrid list={backendImages} />,
  },
  {
    key: "4",
    label: "Frameworks",
    children: <ImageGrid list={fullstackImages} />,
  },
  {
    key: "5",
    label: "Mobile App",
    children: <ImageGrid list={mobileImages} />,
  },
  {
    key: "6",
    label: "DataBase",
    children: <ImageGrid list={databaseImages} />,
  },
  {
    key: "7",
    label: "Google",
    children: <ImageGrid list={googleImages} />,
  },
  {
    key: "8",
    label: "Data Science",
    children: <ImageGrid list={dataScienceImages} />,
  },
  {
    key: "9",
    label: "Machine Learning",
    children: <ImageGrid list={machineLearningImages} />,
  },
  {
    key: "10",
    label: "DevOps",
    children: <ImageGrid list={devOpsImages} />,
  },
  {
    key: "11",
    label: "CMS",
    children: <ImageGrid list={cmsImages} />,
  },
  {
    key: "12",
    label: "ECommerce",
    children: <ImageGrid list={eComImages} />,
  },
  {
    key: "13",
    label: "Security",
    children: <ImageGrid list={securityImages} />,
  },
];

function TabComponent() {
  return <Tabs defaultActiveKey="1" items={items} />;
}

export default TabComponent;

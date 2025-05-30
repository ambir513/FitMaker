"use client"
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Diet_filter() {
  return (
    <Card className="lg:w-[300px] md:w-[500px] w-[300px] lg:h-[520px] h-fit py-6 animate-fade ">
      <CardHeader>
        <CardTitle>Create your Diet plan</CardTitle>
        <CardDescription>
          <p className="text-[12px]">
            select the fields according to your personal details
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-row justify-between items-center gap-3">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Gender</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Age</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="17, 16">below 18</SelectItem>
                    <SelectItem value="18, 25">18-25</SelectItem>
                    <SelectItem value="25, 40">25-40</SelectItem>
                    <SelectItem value="40, 50">above 40</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center gap-3">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Height</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="4, 3">below 4 ft</SelectItem>
                    <SelectItem value="4, 5">4-5 ft</SelectItem>
                    <SelectItem value="5, 6">5-6 ft</SelectItem>
                    <SelectItem value="6, 7">above 6 ft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Weight</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="30, 20">below 30 kg</SelectItem>
                    <SelectItem value="30, 40">30-40 kg</SelectItem>
                    <SelectItem value="40, 50">40-50 kg</SelectItem>
                    <SelectItem value="50, 60 ">above 50 kg</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Diseases</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="diabetes">Diabetes</SelectItem>
                  <SelectItem value="cancer">Cancer</SelectItem>
                  <SelectItem value="kidney">Kidney</SelectItem>
                  <SelectItem value="hypertension">Hypertension</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="relative">
        <Button
          variant="outline"
          className="absolute right-0 mr-5 mb-5 cursor-pointer"
        >
          Clear
        </Button>
      </CardFooter>
      <hr className="mx-4 mt-2 lg:flex hidden" />
      <div className="w-[250px] ml-6 lg:flex flex-col justify-center items-center gap-3 hidden">
        <Button className="w-full cursor-pointer">Get Exercises</Button>
        <Button variant="outline" className="w-full cursor-pointer">
          Generate with AI
        </Button>
      </div>
    </Card>
  );
}

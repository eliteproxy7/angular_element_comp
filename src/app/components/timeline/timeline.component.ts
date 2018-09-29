import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.scss"]
})
export class TimelineComponent implements OnInit {
  panelOpenState = false;
  currentOpen = 1;
  color = "accent";
  constructor() {}

  ngOnInit() {}

  timeline = [
    {
      id: 1,
      title: "Step Title 1",
      status: 1,
      progress: 54,
      notes: "notes here",
      borrowers: [
        {
          name: "Bob Smith",
          status: 1
        },
        {
          name: "Erika Smith",
          status: 2
        }
      ]
    },
    {
      id: 1,
      title: "Step Title 2",
      status: 1,
      progress: 70,
      notes: "notes here",
      borrowers: [
        {
          name: "Bob Smith",
          status: 1
        },
        {
          name: "Erika Smith",
          status: 2
        }
      ]
    },
    {
      id: 2,
      title: "Step Title 3",
      status: 2,
      progress: 54,
      notes: "tbd"
    },
    {
      id: 3,
      title: "Step Title 4",
      status: 2,
      progress: 54,
      notes: null,
      borrowers: [
        {
          name: "Bob Smith",
          status: 1
        },
        {
          name: "Erika Smith",
          status: 2
        }
      ]
    },
    {
      id: 4,
      title: "Step Title 5",
      status: 0,
      progress: 54,
      notes: null,
      borrowers: [
        {
          name: "Bob Smith",
          status: 1
        },
        {
          name: "Erika Smith",
          status: 2
        }
      ]
    },
    {
      id: 5,
      title: "Step Title 6",
      status: 1,
      progress: 54,
      notes: null,
      borrowers: [
        {
          name: "Bob Smith",
          status: 1
        },
        {
          name: "Erika Smith",
          status: 2
        }
      ]
    },
    {
      id: 6,
      title: "Step Title 7",
      status: 0,
      progress: 54,
      notes: null
    }
  ];

  getStatus(status) {
    switch (status) {
      case 1:
        return "completed";
      case 2:
        return "inprogress";
      case 0:
        return "notstarted";
    }
  }

  getSubBorrowerInfo(status) {
    switch (status) {
      case 1:
        return "completed";
      case 2:
        return "need info";
    }
  }
}

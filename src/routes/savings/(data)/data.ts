import CheckCircled from "svelte-radix/CheckCircled.svelte";
import CrossCircled from "svelte-radix/CrossCircled.svelte";
import Circle from "svelte-radix/Circle.svelte";
import Avatar from "svelte-radix/Avatar.svelte";
import PinTop from "svelte-radix/PinTop.svelte";
import Stopwatch from "svelte-radix/Stopwatch.svelte";

export const labels = [
    {
        value: "FD",
        label: "FD",
    },
    {
        value: "RD",
        label: "RD",
    },
];

export const statuses = [
    {
        value: "Withdrawn",
        label: "Withdrawn",
        icon: PinTop,
    },
    {
        value: "Renewed",
        label: "Renewed",
        icon: Circle,
    },
    {
        value: "Active",
        label: "Active",
        icon: Stopwatch,
    },
    {
        value: "Matured",
        label: "Matured",
        icon: CheckCircled,
    },
    {
        value: "Closed",
        label: "Closed",
        icon: CrossCircled,
    },
];

export const names = [
    {
        label: "Erson",
        value: "Erson",
        icon: Avatar,
    },
    {
        label: "Ruxana",
        value: "Ruxana",
        icon: Avatar,
    },
    {
        label: "Edward",
        value: "Edward",
        icon: Avatar,
    },
];
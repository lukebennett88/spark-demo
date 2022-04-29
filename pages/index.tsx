import { css } from "@emotion/css";
import { useFocusRing, VisuallyHidden } from "@spark-web/a11y";
import { Box } from "@spark-web/box";
import { Button } from "@spark-web/button";
import { Columns } from "@spark-web/columns";
import { Container } from "@spark-web/container";
import { Field } from "@spark-web/field";
import { Heading } from "@spark-web/heading";
import { Hidden } from "@spark-web/hidden";
import {
  AcademicCapIcon,
  BellIcon,
  BriefcaseIcon,
  ChartSquareBarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ClipboardCheckIcon,
  ClipboardListIcon,
  ClockIcon,
  CogIcon,
  DocumentTextIcon,
  HomeIcon,
} from "@spark-web/icon";
import { Inline } from "@spark-web/inline";
import { Link } from "@spark-web/link";
import { NavLink } from "@spark-web/nav-link";
import { Row } from "@spark-web/row";
import { Stack } from "@spark-web/stack";
import { Text } from "@spark-web/text";
import { TextInput } from "@spark-web/text-input";
import { useTheme } from "@spark-web/theme";
import { createElement, useId } from "react";

import { Logo } from "../components/brighte-logo";

export default function Dashboard() {
  const id = useId();
  console.log(id);

  return (
    <>
      <Header />
      <ContentArea />
    </>
  );
}

const SIDEBAR_WIDTH = 280;
const HEADER_HEIGHT = 60;

function Header() {
  const theme = useTheme();
  const focusRingStyles = useFocusRing();

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex="sticky"
      background="surface"
      className={css({
        borderBottom: `1px solid ${theme.border.color.standard}`,
      })}
    >
      <Container size="xlarge">
        <Row
          alignY="center"
          gap="large"
          className={css({ height: HEADER_HEIGHT })}
        >
          <Box
            paddingLeft="xxlarge"
            paddingY="small"
            className={css({ width: SIDEBAR_WIDTH })}
          >
            <Link
              href="/"
              className={css({
                display: "inline-block",
                borderRadius: theme.border.radius.small,
                ":focus": focusRingStyles,
              })}
            >
              <VisuallyHidden>Brighte logo</VisuallyHidden>
              <Logo
                fill={theme.color.foreground.primary}
                className={css({
                  height: theme.sizing.medium,
                  marginBottom: -4,
                  ":hover": { fill: theme.color.foreground.primaryHover },
                  ":active": { fill: theme.color.foreground.primaryActive },
                })}
              />
            </Link>
          </Box>
          <Inline
            alignY="center"
            gap="large"
            width="full"
            className={css({
              height: HEADER_HEIGHT,
            })}
          >
            <Inline
              alignY="center"
              gap="large"
              flex={1}
              className={css({
                height: HEADER_HEIGHT,
              })}
            >
              <Box display={{ mobile: "none", desktop: "block" }} flex={1}>
                <Field label="Search" labelVisibility="hidden">
                  <TextInput type="search" placeholder="Search..." />
                </Field>
              </Box>
              <Inline
                gap="large"
                alignY="center"
                className={css({ width: SIDEBAR_WIDTH })}
              >
                <Button label="Notifications" tone="neutral" prominence="none">
                  <BellIcon />
                </Button>
                <Box
                  as="button"
                  display="flex"
                  alignItems="center"
                  border="standard"
                  gap="small"
                  borderRadius="full"
                  padding="xsmall"
                  className={css({
                    ":focus": {
                      ...focusRingStyles,
                      borderColor: theme.border.color.fieldAccent,
                    },
                  })}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    height={theme.sizing.small}
                    width={theme.sizing.small}
                    alt="Jane Smith user avatar"
                    className={css({
                      borderRadius: theme.border.radius.full,
                    })}
                  />
                  <Stack gap="small">
                    <Text
                      tone="muted"
                      size="xsmall"
                      align="left"
                      weight="strong"
                    >
                      Jane Smith
                    </Text>
                    <Text tone="muted" size="xsmall" align="left">
                      Australian Solar
                    </Text>
                  </Stack>
                  <Box
                    height="small"
                    width="small"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <ChevronDownIcon size="xxsmall" tone="muted" />
                  </Box>
                </Box>
              </Inline>
            </Inline>
          </Inline>
        </Row>
      </Container>
    </Box>
  );
}

function ContentArea() {
  return (
    <Container size="xlarge">
      <Inline gap="large">
        <Hidden below="desktop">
          <SideBar />
        </Hidden>
        <Main />
      </Inline>
    </Container>
  );
}

function SideBar() {
  return (
    <Stack
      as="nav"
      gap="small"
      padding="small"
      paddingLeft="xxlarge"
      className={css({ width: SIDEBAR_WIDTH })}
    >
      {[
        {
          label: "Dashboard",
          href: "/",
          icon: HomeIcon,
          isSelected: true,
        },
        {
          label: "Applications",
          href: "/",
          icon: ClipboardListIcon,
          isSelected: false,
        },
        {
          label: "Leads",
          href: "/",
          icon: BriefcaseIcon,
          isSelected: false,
        },
        {
          label: "Training",
          href: "/",
          icon: AcademicCapIcon,
          isSelected: false,
        },
        {
          label: "Analytics",
          href: "/",
          icon: ChartSquareBarIcon,
          isSelected: false,
        },
        {
          label: "Settings",
          href: "/",
          icon: CogIcon,
          isSelected: false,
        },
      ].map(({ label, href, icon, isSelected }) => (
        <NavLink key={label} href={href} isSelected={isSelected}>
          {createElement(icon)}
          {label}
        </NavLink>
      ))}
    </Stack>
  );
}

function Main() {
  return (
    <Stack
      as="main"
      flex={1}
      gap="xxlarge"
      paddingX={{ mobile: "large", desktop: "none" }}
      paddingY={{ mobile: "small", desktop: "none" }}
      paddingRight="xxlarge"
    >
      <Box position="relative">
        <Hidden below="desktop">
          <Box
            as="svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 660 98"
            position="absolute"
            right={0}
            top={0}
            bottom={0}
          >
            <circle cx={375.5} cy={-277.5} r={375.5} fill="#FFF0E0" />
          </Box>
          <Box
            as="img"
            src="/hero-image.png"
            alt=""
            position="absolute"
            right={0}
            top={0}
            bottom={0}
          />
        </Hidden>
        <Stack paddingY="xxlarge" gap="large" position="relative">
          <Heading as="h1" level="2">
            Welcome, Darrell
          </Heading>
          <Text tone="muted">Here are the latest insights.</Text>
        </Stack>
      </Box>
      <AtAGlance />
      <Columns template={[3, 2]} collapseBelow="wide" gap="xlarge">
        <Stack gap="xxlarge">
          <UnassignedLeads />
          <LatestPayments />
        </Stack>
        <VendorUpdates />
      </Columns>
    </Stack>
  );
}

function AtAGlance() {
  return (
    <Stack as="article" gap="large">
      <Heading as="h2" level="3">
        At a glance
      </Heading>
      <Columns gap="xlarge" alignY="stretch" collapseBelow="tablet">
        {(
          [
            [
              {
                icon: BriefcaseIcon,
                label: "Unassigned leads",
                number: 8,
                tone: "critical",
                value: "$37,500.00",
              },
              {
                icon: DocumentTextIcon,
                label: "Sent quotes",
                number: 10,
                tone: "caution",
                value: "$37,500.00",
              },
            ],
            [
              {
                icon: ClipboardCheckIcon,
                label: "Approved applications",
                number: 8,
                tone: "info",
                value: "$37,500.00",
              },
              {
                icon: ClipboardListIcon,
                label: "Paid application",
                number: 8,
                tone: "positive",
                value: "$37,500.00",
              },
            ],
          ] as const
        ).map((column, index) => (
          <Columns
            key={index}
            gap="xlarge"
            alignY="stretch"
            collapseBelow="desktop"
          >
            {column.map(({ icon, label, number, tone, value }) => (
              <Stack
                key={label}
                as="article"
                background={`${tone}Low` || "criticalLow"}
                gap="large"
                padding="large"
                borderRadius="large"
              >
                {createElement(icon, { size: "xsmall", tone })}
                <Heading as="span" level="2">
                  {number}
                </Heading>
                <Stack gap="small">
                  <Text weight="strong">{label}</Text>
                  <Text>{value}</Text>
                </Stack>
              </Stack>
            ))}
          </Columns>
        ))}
      </Columns>
    </Stack>
  );
}

function SeeAllLink({ href }: { href: string }) {
  return (
    <Link as={Inline} gap="small" alignY="center" href={href}>
      <Text inline weight="strong">
        See all
      </Text>
      <ChevronRightIcon size="xxsmall" />
    </Link>
  );
}

function UnassignedLeads() {
  return (
    <Stack as="article" gap="large">
      <Inline alignY="center">
        <Row flex={1}>
          <Heading as="h2" level="3">
            Unassigned leads
          </Heading>
        </Row>
        <Row alignSelf="end">
          <SeeAllLink href="/" />
        </Row>
      </Inline>
      <Columns gap="xlarge" template={[1, 1]} collapseBelow="tablet">
        {[
          {
            status: "New",
            name: "Jenny Wilson",
            product: "Solar System",
            lastUpdated: "5 minutes ago",
          },
          {
            status: "New",
            name: "Jenny Wilson",
            product: "Solar System",
            lastUpdated: "5 minutes ago",
          },
          {
            status: "New",
            name: "Jenny Wilson",
            product: "Solar System",
            lastUpdated: "5 minutes ago",
          },
          {
            status: "New",
            name: "Jenny Wilson",
            product: "Solar System",
            lastUpdated: "5 minutes ago",
          },
        ].map(({ status, name, product, lastUpdated }, index) => (
          <Stack
            key={index}
            border="standard"
            padding="large"
            align="left"
            gap="xlarge"
            borderRadius="medium"
          >
            <Box
              border="standard"
              borderRadius="full"
              padding="xsmall"
              paddingRight="small"
              display="flex"
              alignItems="center"
              gap="small"
            >
              <Box
                aria-hidden="true"
                height="xxsmall"
                width="xxsmall"
                background="info"
                borderRadius="full"
              />
              <Text size="xsmall">{status}</Text>
            </Box>
            <Stack gap="medium">
              <Text size="small" weight="strong">
                {name}
              </Text>
              <Text size="small">{product}</Text>
              <Text size="xsmall">{lastUpdated}</Text>
            </Stack>
          </Stack>
        ))}
      </Columns>
    </Stack>
  );
}

function LatestPayments() {
  return (
    <Stack as="article" gap="large">
      <Inline alignY="center">
        <Row flex={1}>
          <Heading as="h2" level="3">
            Latest payments
          </Heading>
        </Row>
        <Row alignSelf="end">
          <SeeAllLink href="/" />
        </Row>
      </Inline>
      {/*  */}
    </Stack>
  );
}

function VendorUpdates() {
  return (
    <Stack as="article" gap="large">
      <Inline alignY="center">
        <Row flex={1}>
          <Heading as="h2" level="3">
            Vendor updates
          </Heading>
        </Row>
        <Row alignSelf="end">
          <SeeAllLink href="/" />
        </Row>
      </Inline>
      {[
        {
          imgSrc:
            "https://s3-alpha-sig.figma.com/img/c673/5a2e/0e3b8ed7eeaf613c50ee59cf378fb723?Expires=1652054400&Signature=ZZl8hzOqVP6p0a0hMvFbIJTRhwnVV9TdKlvSGAmMIaiisQa9hn90o32px5f8SKiY1QLaTBHOUCIuDDSG~5yE2yLLqnW8kpA3AUCJdz0VkLSn5u5FnbP4Mq0Op0W-8dGFKkbF4jVPQxSdjK9gD6W3qTMtyYYOSltmE8jZVl5vQ-6yPZXY43sjithz2iYcAqtVuKhvZlryilGE7PfNsvbpV0zHJbRhQ6cNgHVpxnWzQMhNTTh7CvvY3tggZGh2LGsH3B7j2PHJeiVYxRtlmpC1~WSb4ZSSh4-Ij5pE6hJr7qDwG6fKYIHLTsfWrmkEt2DbgBknxS46zwqb9S0r-1GlkQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          date: "31 Mar 2022",
          title:
            "Brighte backs ACT Home Energy Support Rebate to help more homeowners access solar",
        },
        {
          imgSrc:
            "https://s3-alpha-sig.figma.com/img/ba29/85d9/362e5061b81fd860ceda7ae09144220d?Expires=1652054400&Signature=SgeJ2tFJfrnaamCcdsgDJs0bBusNW9u5knFJgCT~i3PXUVK-5y1rPBZvd59ZlkJ~uSy1q~YO-~~T1S6tZWZyGpl2dlJgeISYmTgCHvGVaN6T-H48Sojlgg9J~dybs2vlsrFJVp8aGGLOrZl2QqpfAnhIjT2-DejpCGyUlVOLy60XM7OePPvN4VDznRwATXgJWIPiUW62kL7b4BKBi5SRhLl~gnctWyrRcQ3RK8RDnpS9JV~lopC5u1NAILSeyfC5aPyqA-6zASYsNExoUddnCX3iA~PHOy8AETHXIAeong8k5B3LAr9-KrTkDS6fxaT5b8JAj8XL~ot-yMLcAaxkdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          date: "21 Dec 2021",
          title:
            "Brighte to offer first 0% interest payment plan on OpenSolar platform",
        },
      ].map(({ imgSrc, date, title }) => (
        <Stack key={title} as="article" gap="large">
          <Box
            as="img"
            src={imgSrc}
            alt=""
            width="full"
            borderRadius="medium"
            className={css({
              objectFit: "cover",
              aspectRatio: "2/1",
            })}
          />
          <Stack gap="small">
            <Inline as="time" alignY="center" gap="xsmall">
              <ClockIcon size="xxsmall" tone="muted" />
              <Text size="small" tone="muted">
                {date}
              </Text>
            </Inline>
            <Text weight="strong">{title}</Text>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}

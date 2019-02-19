function calculate_shuttle_run_score(age, gender, time) {
	switch(gender) {
		case 'male':
			if (age <= 19) {
				return get_shuttle_run_masc_19(time);
			} else if (age <= 24) {
				return get_shuttle_run_masc_24(time);
			} else if (age <= 29) {
				return get_shuttle_run_masc_29(time);
			} else if (age <= 34) {
				return get_shuttle_run_masc_34(time);
			} else if (age <= 39) {
				return get_shuttle_run_masc_39(time);
			} else if (age <= 44) {
				return get_shuttle_run_masc_44(time);
			} else if (age <= 49) {
				return get_shuttle_run_masc_49(time);
			} else if (age >= 50) {
				return get_shuttle_run_masc_50(time);
			}
			break;
		case 'female':
			if (age <= 19) {
				return get_shuttle_run_fem_19(time);
			} else if (age <= 24) {
				return get_shuttle_run_fem_24(time);
			} else if (age <= 29) {
				return get_shuttle_run_fem_29(time);
			} else if (age <= 34) {
				return get_shuttle_run_fem_34(time);
			} else if (age <= 39) {
				return get_shuttle_run_fem_39(time);
			} else if (age <= 44) {
				return get_shuttle_run_fem_44(time);
			} else if (age <= 49) {
				return get_shuttle_run_fem_49(time);
			} else if (age >= 50) {
				return get_shuttle_run_fem_50(time);
			}
		break;
	}
}

function get_shuttle_run_masc_19(time) {
	if (time <= 572) {
		return 10;
	} else if (time <= 548) {
		return 9.5;
	} else if (time <= 564) {
		return 9;
	} else if (time <= 580) {
		return 8.5;
	} else if (time <= 596) {
		return 8;
	} else if (time <= 612) {
		return 7.5;
	} else if (time <= 628) {
		return 7;
	} else if (time <= 603) {
		return 6.5;
	} else if (time <= 619) {
		return 6;
	} else if (time <= 635) {
		return 5.5;
	} else if (time <= 651) {
		return 5;
	} else if (time <= 667) {
		return 4.5;
	} else if (time <= 683) {
		return 4;
	} else if (time <= 699) {
		return 3.5;
	} else if (time <= 675) {
		return 3;
	} else if (time > 675) {
		return 0;
	}
}

function get_shuttle_run_masc_24(time) {
	if (time <= 547) {
		return 10;
	} else if (time <= 563) {
		return 9.5;
	} else if (time <= 579) {
		return 9;
	} else if (time <= 595) {
		return 8.5;
	} else if (time <= 611) {
		return 8;
	} else if (time <= 627) {
		return 7.5;
	} else if (time <= 603) {
		return 7;
	} else if (time <= 619) {
		return 6.5;
	} else if (time <= 635) {
		return 6;
	} else if (time <= 651) {
		return 5.5;
	} else if (time <= 667) {
		return 5;
	} else if (time <= 683) {
		return 4.5;
	} else if (time <= 699) {
		return 4;
	} else if (time <= 675) {
		return 3.5;
	} else if (time <= 691) {
		return 3;
	} else if (time > 691) {
		return 0;
	}
}

function get_shuttle_run_masc_29(time) {
	if (time <= 563) {
		return 10;
	} else if (time <= 579) {
		return 9.5;
	} else if (time <= 595) {
		return 9;
	} else if (time <= 611) {
		return 8.5;
	} else if (time <= 627) {
		return 8;
	} else if (time <= 619) {
		return 7.5;
	} else if (time <= 635) {
		return 7;
	} else if (time <= 651) {
		return 6.5;
	} else if (time <= 667) {
		return 6;
	} else if (time <= 683) {
		return 5.5;
	} else if (time <= 699) {
		return 5;
	} else if (time <= 675) {
		return 4.5;
	} else if (time <= 691) {
		return 4;
	} else if (time <= 707) {
		return 3.5;
	} else if (time <= 707) {
		return 3;
	} else if (time > 707) {
		return 0;
	}
}

function get_shuttle_run_masc_34(time) {
	if (time <= 578) {
		return 10;
	} else if (time <= 594) {
		return 9.5;
	} else if (time <= 610) {
		return 9;
	} else if (time <= 626) {
		return 8.5;
	} else if (time <= 602) {
		return 8;
	} else if (time <= 618) {
		return 7.5;
	} else if (time <= 634) {
		return 7;
	} else if (time <= 650) {
		return 6.5;
	} else if (time <= 666) {
		return 6;
	} else if (time <= 682) {
		return 5.5;
	} else if (time <= 698) {
		return 5;
	} else if (time <= 674) {
		return 4.5;
	} else if (time <= 690) {
		return 4;
	} else if (time <= 706) {
		return 3.5;
	} else if (time <= 722) {
		return 3;
	} else if (time > 722) {
		return 0;
	}	
}

function get_shuttle_run_masc_39(time) {
	if (time <= 593) {
		return 10;
	} else if (time <= 609) {
		return 9.5;
	} else if (time <= 625) {
		return 9;
	} else if (time <= 601) {
		return 8.5;
	} else if (time <= 617) {
		return 8;
	} else if (time <= 633) {
		return 7.5;
	} else if (time <= 649) {
		return 7;
	} else if (time <= 665) {
		return 6.5;
	} else if (time <= 681) {
		return 6;
	} else if (time <= 697) {
		return 5.5;
	} else if (time <= 673) {
		return 5;
	} else if (time <= 689) {
		return 4.5;
	} else if (time <= 705) {
		return 4;
	} else if (time <= 721) {
		return 3.5;
	} else if (time <= 737) {
		return 3;
	} else if (time > 737) {
		return 0;
	}
}

function get_shuttle_run_masc_44(time) {
	if (time <= 608) {
		return 10;
	} else if (time <= 624) {
		return 9.5;
	} else if (time <= 600) {
		return 9;
	} else if (time <= 616) {
		return 8.5;
	} else if (time <= 632) {
		return 8;
	} else if (time <= 648) {
		return 7.5;
	} else if (time <= 664) {
		return 7;
	} else if (time <= 680) {
		return 6.5;
	} else if (time <= 696) {
		return 6;
	} else if (time <= 672) {
		return 5.5;
	} else if (time <= 688) {
		return 5;
	} else if (time <= 704) {
		return 4.5;
	} else if (time <= 719) {
		return 4;
	} else if (time <= 735) {
		return 3.5;
	} else if (time <= 751) {
		return 3;
	} else if (time > 751) {
		return 0;
	}
}

function get_shuttle_run_masc_49(time) {
	if (time <= 623) {
		return 10;
	} else if (time <= 639) {
		return 9.5;
	} else if (time <= 615) {
		return 9;
	} else if (time <= 631) {
		return 8.5;
	} else if (time <= 647) {
		return 8;
	} else if (time <= 663) {
		return 7.5;
	} else if (time <= 679) {
		return 7;
	} else if (time <= 695) {
		return 6.5;
	} else if (time <= 671) {
		return 6;
	} else if (time <= 687) {
		return 5.5;
	} else if (time <= 703) {
		return 5;
	} else if (time <= 719) {
		return 4.5;
	} else if (time <= 735) {
		return 4;
	} else if (time <= 751) {
		return 3.5;
	} else if (time <= 727) {
		return 3;
	} else if (time > 727) {
		return 0;
	}
}

function get_shuttle_run_masc_50(time) {
	if (time <= 636) {
		return 10;
	} else if (time <= 612) {
		return 9.5;
	} else if (time <= 628) {
		return 9;
	} else if (time <= 644) {
		return 8.5;
	} else if (time <= 660) {
		return 8;
	} else if (time <= 676) {
		return 7.5;
	} else if (time <= 692) {
		return 7;
	} else if (time <= 668) {
		return 6.5;
	} else if (time <= 684) {
		return 6;
	} else if (time <= 700) {
		return 5.5;
	} else if (time <= 716) {
		return 5;
	} else if (time <= 732) {
		return 4.5;
	} else if (time <= 748) {
		return 4;
	} else if (time <= 724) {
		return 3.5;
	} else if (time <= 740) {
		return 3;
	} else if (time > 740) {
		return 0;
	}
}


function get_shuttle_run_fem_19(time) {
	if (time <= 612) {
		return 10;
	} else if (time <= 628) {
		return 9.5;
	} else if (time <= 644) {
		return 9;
	} else if (time <= 660) {
		return 8.5;
	} else if (time <= 676) {
		return 8;
	} else if (time <= 692) {
		return 7.5;
	} else if (time <= 668) {
		return 7;
	} else if (time <= 684) {
		return 6.5;
	} else if (time <= 700) {
		return 6;
	} else if (time <= 716) {
		return 5.5;
	} else if (time <= 732) {
		return 5;
	} else if (time <= 748) {
		return 4.5;
	} else if (time <= 724) {
		return 4;
	} else if (time <= 740) {
		return 3.5;
	} else if (time <= 756) {
		return 3;
	} else if (time > 756) {
		return 0;
	}
}

function get_shuttle_run_fem_24(time) {
	if (time <= 622) {
		return 10;
	} else if (time <= 638) {
		return 9.5;
	} else if (time <= 654) {
		return 9;
	} else if (time <= 670) {
		return 8.5;
	} else if (time <= 686) {
		return 8;
	} else if (time <= 662) {
		return 7.5;
	} else if (time <= 678) {
		return 7;
	} else if (time <= 694) {
		return 6.5;
	} else if (time <= 710) {
		return 6;
	} else if (time <= 726) {
		return 5.5;
	} else if (time <= 742) {
		return 5;
	} else if (time <= 758) {
		return 4.5;
	} else if (time <= 734) {
		return 4;
	} else if (time <= 750) {
		return 3.5;
	} else if (time <= 766) {
		return 3;
	} else if (time > 766) {
		return 0;
	}
}

function get_shuttle_run_fem_29(time) {
	if (time <= 648) {
		return 10;
	} else if (time <= 664) {
		return 9.5;
	} else if (time <= 680) {
		return 9;
	} else if (time <= 696) {
		return 8.5;
	} else if (time <= 672) {
		return 8;
	} else if (time <= 688) {
		return 7.5;
	} else if (time <= 704) {
		return 7;
	} else if (time <= 720) {
		return 6.5;
	} else if (time <= 736) {
		return 6;
	} else if (time <= 752) {
		return 5.5;
	} else if (time <= 728) {
		return 5;
	} else if (time <= 744) {
		return 4.5;
	} else if (time <= 760) {
		return 4;
	} else if (time <= 776) {
		return 3.5;
	} else if (time <= 792) {
		return 3;
	} else if (time > 792) {
		return 0;
	}
}

function get_shuttle_run_fem_34(time) {
	if (time <= 674) {
		return 10;
	} else if (time <= 690) {
		return 9.5;
	} else if (time <= 666) {
		return 9;
	} else if (time <= 682) {
		return 8.5;
	} else if (time <= 698) {
		return 8;
	} else if (time <= 714) {
		return 7.5;
	} else if (time <= 730) {
		return 7;
	} else if (time <= 746) {
		return 6.5;
	} else if (time <= 722) {
		return 6;
	} else if (time <= 738) {
		return 5.5;
	} else if (time <= 754) {
		return 5;
	} else if (time <= 770) {
		return 4.5;
	} else if (time <= 786) {
		return 4;
	} else if (time <= 802) {
		return 3.5;
	} else if (time <= 818) {
		return 3;
	} else if (time > 818) {
		return 0;
	}
}

function get_shuttle_run_fem_39(time) {
	if (time <= 699) {
		return 10;
	} else if (time <= 675) {
		return 9.5;
	} else if (time <= 691) {
		return 9;
	} else if (time <= 707) {
		return 8.5;
	} else if (time <= 723) {
		return 8;
	} else if (time <= 739) {
		return 7.5;
	} else if (time <= 755) {
		return 7;
	} else if (time <= 731) {
		return 6.5;
	} else if (time <= 747) {
		return 6;
	} else if (time <= 763) {
		return 5.5;
	} else if (time <= 779) {
		return 5;
	} else if (time <= 795) {
		return 4.5;
	} else if (time <= 811) {
		return 4;
	} else if (time <= 787) {
		return 3.5;
	} else if (time <= 803) {
		return 3;
	} else if (time > 803) {
		return 0;
	}
}

function get_shuttle_run_fem_44(time) {
	if (time <= 685) {
		return 10;
	} else if (time <= 701) {
		return 9.5;
	} else if (time <= 717) {
		return 9;
	} else if (time <= 733) {
		return 8.5;
	} else if (time <= 749) {
		return 8;
	} else if (time <= 725) {
		return 7.5;
	} else if (time <= 741) {
		return 7;
	} else if (time <= 757) {
		return 6.5;
	} else if (time <= 773) {
		return 6;
	} else if (time <= 789) {
		return 5.5;
	} else if (time <= 805) {
		return 5;
	} else if (time <= 781) {
		return 4.5;
	} else if (time <= 797) {
		return 4;
	} else if (time <= 813) {
		return 3.5;
	} else if (time <= 829) {
		return 3;
	} else if (time > 829) {
		return 0;
	}
}

function get_shuttle_run_fem_49(time) {
	if (time <= 710) {
		return 10;
	} else if (time <= 726) {
		return 9.5;
	} else if (time <= 742) {
		return 9;
	} else if (time <= 758) {
		return 8.5;
	} else if (time <= 734) {
		return 8;
	} else if (time <= 750) {
		return 7.5;
	} else if (time <= 766) {
		return 7;
	} else if (time <= 782) {
		return 6.5;
	} else if (time <= 798) {
		return 6;
	} else if (time <= 814) {
		return 5.5;
	} else if (time <= 790) {
		return 5;
	} else if (time <= 806) {
		return 4.5;
	} else if (time <= 822) {
		return 4;
	} else if (time <= 838) {
		return 3.5;
	} else if (time <= 854) {
		return 3;
	} else if (time > 854) {
		return 0;
	}
}

function get_shuttle_run_fem_50(time) {
	if (time <= 736) {
		return 10;
	} else if (time <= 752) {
		return 9.5;
	} else if (time <= 728) {
		return 9;
	} else if (time <= 744) {
		return 8.5;
	} else if (time <= 760) {
		return 8;
	} else if (time <= 776) {
		return 7.5;
	} else if (time <= 792) {
		return 7;
	} else if (time <= 808) {
		return 6.5;
	} else if (time <= 784) {
		return 6;
	} else if (time <= 800) {
		return 5.5;
	} else if (time <= 816) {
		return 5;
	} else if (time <= 832) {
		return 4.5;
	} else if (time <= 848) {
		return 4;
	} else if (time <= 864) {
		return 3.5;
	} else if (time <= 840) {
		return 3;
	} else if (time > 840) {
		return 0;
	}
}